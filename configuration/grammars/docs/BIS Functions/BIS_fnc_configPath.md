Returns config path to given entry in given format.


---
*Syntaxes:*

[config, format, strict] call `BIS_fnc_configPath`

---
*Example 1:*

```sqf
["configFile >> ""CfgVehicles"" >> ""Car"""] call BIS_fnc_configPath; // ["configFile","CfgVehicles","Car"]
```

*Example 2:*

```sqf
[["mary", "had", "a", "little", "lamb"], ""] call BIS_fnc_configPath; // "mary >> ""had"" >> ""a"" >> ""little"" >> ""lamb"""
```

*Example 3:*

```sqf
`"configFile","CfgVehicles","Car"` call BIS_fnc_configPath; // bin\config.cpp/CfgVehicles/Car
```

*Example 4:*

```sqf
["bin\config.cpp/CfgVehicles/Car"] call BIS_fnc_configPath; // ["configFile","CfgVehicles","Car"]
```

*Example 5:*

```sqf
[configFile >> "CfgVehicles" >> "Car", ""] call BIS_fnc_configPath; // "configFile >> ""CfgVehicles"" >> ""Car"""
```

*Example 6:*

```sqf
["bin\config.cpp/CfgVehicles/Car", "", true] call BIS_fnc_configPath; // "configFile >> ""CfgVehicles"" >> ""Car"""
```

*Example 7:*

```sqf
["bin\config.cpp/CfgVehicles/Car", ""] call BIS_fnc_configPath; // "bin\config.cpp/CfgVehicles/Car"
```

*Example 8:*

```sqf
[["mary", "had", "a", "little", "lamb"], "", true] call BIS_fnc_configPath; // "" invalid config
```