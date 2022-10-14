Returns an array of config entries which meet criteria in condition code. Command iterates through available classes and config properties for given config entry.
If 3rd param is `true` the search also includes inherited properties. Current looked at config is stored in _x variable (similar to alternative `count` command implementation).
Condition has to return `true` in order for the looked at property to be added to the resulting array. A bit slower than `configClasses` but allows to access inherited entries.


---
*Syntaxes:*

`configProperties` [config, condition, inherit]

---
*Example 1:*

```sqf
_configs = configProperties [configFile >> "CfgVehicles" >> "O_Truck_02_box_F"];
```

*Example 2:*

```sqf
_configs = configProperties [configFile >> "RscText", "true", true];
```

*Example 3:*

Get all hitpoints of a truck:

```sqf
_hitPoints = [];
_hitPointsCfgs = configProperties [
	configFile >> "CfgVehicles" >> "O_Truck_02_box_F" >> "HitPoints", 
	"true", 
	true
];
hint str _hitPointsCfgs;
```