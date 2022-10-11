Returns an array of config entries which meet criteria in condition code. Command iterates through all available config sub classes of the given config class. Current looked at config is stored in _x variable (similar to alternative `count` command implementation). Condition has to return `true` in order for the looked at config to be added to the resulting array. Slightly faster than `configProperties`, but doesn't account for config properties or inherited entries.


---
*Example 1:*
collect all CfgVehicles configs:

```sqf
_configs = "true" configClasses (configFile >> "CfgVehicles");
```

*Example 2:*
Return all classes that can transport 10 and more soldiers:

```sqf
_transporters = "getNumber (_x >> 'transportSoldier') >= 10" configClasses (configFile >> "CfgVehicles");
```

*Example 3:*
Return all classes that inherit from 'RscText':

```sqf
hint str ("inheritsFrom _x == (configFile >> 'RscText')" configClasses configFile);
```