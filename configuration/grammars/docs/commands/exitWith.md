Exits the `current` code scope. Often used for exiting `do`, `for`, `count`, `forEach` or the whole script.


---
*Example 1:*
```sqf
systemChat "start";
private _condition = true;

if (_condition) then
{
	if (true) exitWith
	{
		systemChat "exiting if _condition scope";
	};
	systemChat "never shown";
};

systemChat "exiting #1 worked";

if (true) exitWith
{
	systemChat "exiting the main scope = leaving the whole script";
};

systemChat "never shown - the script has already ended";
```

*Example 2:*
```sqf
for "_j" from 1 to 10 do
{
	systemChat format ["%1", _j];

	// the for loop will cease and code execution will continue after the end of the loop
	if (_j == 5) exitWith
	{
		systemChat "5 is enough";
	};
};
systemChat "Complete";
```

*Example 3:*
Most loops will also terminate when their scope is exited. To exit and terminate scopes which are called every frame such as `onEachFrame` and `waitUntil` use the following examples:


```sqf
onEachFrame {
	if (!alive player) exitWith
	{
		onEachFrame {};
	};
};
```


```sqf
_time = time + 10;
waitUntil 
{
	if (time > _time) exitWith { true };
	false
};
```

*Example 4:*
```sqf
while { true } do
{
	if (alive player) then
	{
		if (time > 300) exitWith // [wrong] - it will only leave the "if alive player" scope, remaining in the "while true" loop forever
		{
			hint "exiting";
		};
	};
};
```

*Example 5:*
```sqf
if (_condition) exitWith
{
	hint "reached";
};
// else { hint "not reached" }; // [wrong] - using else does not work and makes no sense here
```

```sqf
if (_condition) exitWith
{
	hint "reached";
};
hint "not reached"; // [correct] - if _condition is met, the scope has already been exited by now
```