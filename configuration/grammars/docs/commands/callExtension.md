Calls custom .dll also known as `Extension`. The name of the extension is the name of the extension .dll without ".dll" part (or without "_x64.dll" part on 64-bit Arma). For example if the file is 'myExtension.dll' the name of the extension will be "myExtension". For 64-bit extensions, the name of the extension doesn't need to change and is still "myExtension". The game will automatically look for 'myExtension_x64.dll' when you use 64-bit Arma exe.
<br><br>
This command is blocking, meaning that the game will wait for the extension to return before continuing. This may cause FPS drop if extension is not optimised. If extension takes too long, consider making asynchronous extension, where the result of the work of the extension is collected in a separate call.
<br><br>
Currently there is no limit how much data you can send to the extension. However there is a limit on how much data you can return from extension in one call. The limit is known to the extension and is passed in ** int outputSize**. The limit may or may not change in the future and is currently 10240 bytes. It is up to extension designer to handle multipart results if returned data exceeds output limit.
<br><br>
Since Arma 3 v1.67 it is possible to pass array of arguments to extensions. The array of arguments could be anything and all elements will be converted to strings, however you might want to only send simple types like `Boolean`s, `String`s, `Number`s and `Array`s of all of the above. There is currently a limit on how many arguments can be sent and it is 2048 (since Arma 3 v1.92; previous limit: 1024). However an argument could be an `Array` itself, in this case extension maker will have to provide additional methods for parsing such arguments.
<br><br>
Possible error codes:
* 101: SYNTAX_ERROR_WRONG_PARAMS_SIZE
* 102: SYNTAX_ERROR_WRONG_PARAMS_TYPE
* 201: PARAMS_ERROR_TOO_MANY_ARGS
* 301: EXECUTION_WARNING_TAKES_TOO_LONG
Each error will have entry in .rpt file with more details.<br><br>

The extension execution timeout, after which **301: EXECUTION_WARNING_TAKES_TOO_LONG}} warning is issued, is hardcoded on clients and is 1000.0 milliseconds (1 second). On the server the default limit is also 1 second, however it is possible to set custom limit with {{hl|callExtReportLimit** param (see ` Server Options`).
<br><br>
If an extension with the given name can't be found (or it is found but doesn't implement the required interface properly / at all) the following error will be written into the RPT (In this example the given dll-name was "MyExtension"):
<code>14:27:07 CallExtension 'MyExtension' could not be found</code>
<br>
If an extension is not whitelisted with BattlEye (see `Extensions` for more info) it will be blocked on clients running with enabled BattlEye protection. RPT message outputted however is a little obscure:
<code>21:35:04 Call extension 'MyExtension' could not be loaded: Insufficient system resources exist to complete the requested service</code>
<br>
Since Arma 3 v1.69, **RVExtensionVersion** interface (see source code example below) has been added, which is called by the engine on extension load and expects extension version. This interface is designed to work with both, Linux and Windows. The max buffer size is 32 bytes. The version information will then appear in .`rpt` file like so:
<code>19:06:36 CallExtension loaded: test_extension (.\test_extension.dll) [1.0.0.1]</code>
<br>
For more information see `Extensions`.
<br><br>
<u>Linux specific</u><br>
While on Windows the extension name is case-insensitive, on Linux the extension name is case-sensitive and should match the name of the .so file exactly (minus ".so" part).<br><br>

 `serverName`


---
*Syntaxes:*

extension `callExtension` function

extension `callExtension`  [function, arguments]

---
*Example 1:*

```sqf
_return = "myExtension" callExtension "stringToBeParsed";
```

*Example 2:*

```sqf
_result = "test_extension" callExtension str weapons player;
_result = "test_extension" callExtension ["fnc1", getUnitLoadout player];
_result = "test_extension" callExtension ["fnc2", magazinesAmmoFull player];
_result = "test_extension" callExtension ["fnc1", [weapons player, magazines player]];
```

*Example 3:*

```sqf
_result = "test_extension" callExtension ["fnc1", [1, "two", true, [4, "five", false]]];
parseSimpleArray (_result select 0) params ["_number","_string","_boolean","_array"];
systemChat str [_number,_string,_boolean,_array];
```
<br>
<u>Source Code</u> ({{ExternalLink

*Example 4:*

```sqf
fncToExecute_1 = { hint format ["Extension Result 1: %1", _this] };
fncToExecute_2 = { hint format ["Extension Result 2: %1", _this] };
fncToExecute_3 = { hint format ["Extension Result 3: %1", _this] };

addMissionEventHandler ["ExtensionCallback", 
{
	params ["_name", "_function", "_data"];
	if (_name isEqualTo "test_callback") then 
	{ 
		parseSimpleArray _data call (missionNamespace getVariable [_function, 
		{ 
			hint "Function does not exist!"
		}]);
	};
}];

"test_callback" callExtension str "test data";
```
<br>
Here is a minimal example of an extension utilising [[Arma 3: Mission Event Handlers#ExtensionCallback | extension callback]] (don't actually do it like this). `fncToExecute_X` function is called from "ExtensionCallback" event handler when it is triggered after 2 seconds of the extension call.
<spoiler>
<syntaxhighlight lang="cpp">
#include <thread>
#include <string>
#include <chrono>

extern "C"
{
	__declspec (dllexport) void __stdcall RVExtensionRegisterCallback(int(*callbackProc)(char const *name, char const *function, char const *data));
	__declspec (dllexport) void __stdcall RVExtension(char *output, int outputSize, const char *function);
}

int(*callbackPtr)(char const *name, char const *function, char const *data) = nullptr;

void __stdcall RVExtensionRegisterCallback(int(*callbackProc)(char const *name, char const *function, char const *data))
{
	callbackPtr = callbackProc;
}

void __stdcall RVExtension(char *output, int outputSize, const char *function)
{
	if (!callbackPtr)
		return;

	std::thread ([](std::string fnc)
	{		
		using namespace std::chrono_literals;
		fnc = "[1,2,3," + fnc + "]";

		for (int i = 1; i < 4; ++i) // run 3 times
		{
			std::this_thread::sleep_for(2s); // sleep for 2 seconds
			callbackPtr("test_callback", ("fncToExecute_" + std::to_string(i)).c_str(), fnc.c_str());
		}

	}, function).detach();
}
</syntaxhighlight>
</spoiler>

*Example 5:*

Since Arma 3 v2.11: 
```sqf
hint ("myExtContext" callExtension "");
```
Here is a minimal example: <spoiler>
<syntaxhighlight lang="cpp">
#include <string>
#include <vector>
#include <iterator>
#include <sstream>
#include <iomanip>
 
BOOL APIENTRY DllMain( HMODULE hModule,
                       DWORD  ul_reason_for_call,
                       LPVOID lpReserved
                     )
{
    switch (ul_reason_for_call)
    {
    case DLL_PROCESS_ATTACH:
    case DLL_THREAD_ATTACH:
    case DLL_THREAD_DETACH:
    case DLL_PROCESS_DETACH:
        break;
    }
    return TRUE;
}
 
std::vector<std::string> contextInfo;
 
extern "C"
{
	//--- User entry point
	__declspec (dllexport) void __stdcall RVExtension(char *output, int outputSize, const char *function);
	//--- Engine passed context
	__declspec (dllexport) void __stdcall RVExtensionContext(const char **args, int argsCnt);
}
 
//--- name callExtension function
void __stdcall RVExtension(char *output, int outputSize, const char *function)
{
	//--- Not used here
	(void)function;
 
	if (!contextInfo.empty())
	{
		std::ostringstream oss;
		const char qt = '"';
 
		for (auto it = contextInfo.begin(); it != contextInfo.end() - 1; ++it)
			oss << std::quoted(*it, qt, qt) << ",";
		oss << std::quoted(contextInfo.back(), qt, qt);
 
		//--- Send context info back
		strncpy_s(output, outputSize, ("[" + oss.str() + "]").c_str(), _TRUNCATE);
	}
}
 
//--- Context is executed first, copy it
void __stdcall RVExtensionContext(const char **args, int argsCnt)
{
	contextInfo.assign(args, std::next(args, argsCnt));
}
</syntaxhighlight>
</spoiler>