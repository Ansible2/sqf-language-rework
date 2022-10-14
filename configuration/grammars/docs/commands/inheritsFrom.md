Returns base entry of config entry.


---
*Syntaxes:*

`inheritsFrom` config

---
*Example 1:*

```sqf
_base = inheritsFrom (configFile >> "CfgVehicles" >> "Car");
``` Result is `Config` entry for class "LandVehicle"

*Example 2:*

Print parent tree of given config class:

```sqf
fnc_printParents =
{
	disableSerialization;
	if (!isClass _this) exitWith {hint "Argument is not a config Class"};
	
	private _parents = [];
	
	while {!isNull _this} do
	{
		_parents pushBack configName _this;
		_this = inheritsFrom _this;
	};
	
	reverse _parents;
	
	private _tv = findDisplay 46 createDisplay "RscDisplayEmpty" ctrlCreate ["RscTree", -1];
	_tv ctrlSetPosition [0,0,1,1];
	_tv ctrlSetBackgroundColor [0,0,0,0.5];
	_tv ctrlCommit 0;
	
	private _path = [];
	{
		_tv tvAdd [_path, _x];
		_path pushBack 0;
	} 
	forEach _parents;
	
	tvExpandAll _tv;
};

// Example:
(configFile >> "CfgVehicles" >> typeOf player) call fnc_printParents;
```
[[Image:inheritsFrom.jpg|left|300px]]