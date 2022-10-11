Creates a `trigger` of the given type and at the given position. The type must be a class name in `CfgNonAIVehicles` or `CfgVehicles` with <syntaxhighlight lang="cpp" inline>simulation = detector</syntaxhighlight>. An array containing all units that have activated the trigger is available via <sqf inline>list triggerobj</sqf>. Since triggers are ``Object`s`, commands such as `getPosASL`, `setPosASL`, `deleteVehicle` etc. work on them.

: ""
* {{GVI|arma3|1.98


---
*Example 1:*
```sqf
_trg = createTrigger ["EmptyDetector", getPos player];
_trg setTriggerArea [5, 5, 0, false];
_trg setTriggerActivation ["CIV", "PRESENT", true];
_trg setTriggerStatements ["this", "hint 'Civilian near player'", "hint 'no civilian near'"];
```

*Example 2:*
Open/close Bar Gate automatically:

```sqf
//--- init of the Bar Gate
if (isServer) then
{	
	_gateTrigger = createTrigger ["EmptyDetector", getPosWorld this, false];
	_gateTrigger setVariable ["BarGateObj", this];
	_gateTrigger setTriggerActivation ["ANYPLAYER", "PRESENT", true];
	_gateTrigger setTriggerArea [5, 25, getDir this, true];
	_gateTrigger setTriggerStatements 
	[
		"this", 
		"thisTrigger getVariable ""BarGateObj""; animateSource [""Door_1_sound_source"", 1]", 
		"thisTrigger getVariable ""BarGateObj""; animateSource [""Door_1_sound_source"", 0]"
	];
};
```