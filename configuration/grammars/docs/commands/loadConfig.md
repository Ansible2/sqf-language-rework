Loads the given file as a `Config`, allowing easy processing of the config file contents using commands such as `configClasses`, `configProperties`, `>>`, etc. It can load .rvmat, .bisurf, .cpp, .bin, .sqm, and description.ext files (both binarized and unbinarized configs are supported).


---
*Syntaxes:*

`loadConfig` path

---
*Example 1:*

```sqf
private _cfg = loadConfig "a3\data_f\default_super.rvmat"; // note: very slow! ~0.1200 ms on tested system
getText (_cfg >> "Stage2" >> "uvSource");
```

*Example 2:*

```sqf
// using a hashmap to cache loaded configs, since loading configs is very slow and should be done once.
private _fnc_loadConfig = {
	params ["_path"];
	// initialize cache if not initialized yet
	if (isNil "TAG_configCache") then {
		TAG_configCache = createHashMap;
	};
	private _cfg = TAG_configCache getOrDefault [_path, configNull];
	// if path doesn't exist in the cache or cfg is null, load the config
	if (isNull _cfg) then {
		_cfg = loadConfig _path;
		TAG_configCache set [_path, _cfg];
	};
	_cfg;
};
// the first call will be slow (~0.1200 ms), but subsequent calls are fast (~0.0050 ms)
["a3\data_f\default_super.rvmat"] call _fnc_loadConfig;
```

*Example 3:*

```sqf
// converting a config into hashmap
private _fnc_convertClass = {
	params ["_cfgClass"];

	private _result = createHashMap;
	private _props = configProperties [_cfgClass, "true", true];
	// Note: Hashmaps are case-sensitive. So configName cases have to be consistent (e.g. all lowercase)
	{
		if (isNumber _x) then {_result set [toLowerANSI configName _x, getNumber _x]; continue; };
		if (isText _x) then {_result set [toLowerANSI configName _x, getText _x]; continue; };
		if (isArray _x) then {_result set [toLowerANSI configName _x, getArray _x]; continue; };
	} forEach _props;

	private _classes = "true" configClasses _cfgClass;
	{
		_result set [toLowerANSI configName _x, _x call _fnc_convertClass];
	} forEach _classes;
	_result;
};
private _cfg = loadConfig "mission.sqm";
private _cfgMap = _cfg call _fnc_convertClass;

// The following expression is similar to getNumber(_cfg >> "EditorData" >> "moveGridStep")
// Notice that all strings are lowercase (which is how they were stored in hashmap)
_cfgMap get "editordata" get "movegridstep";
```