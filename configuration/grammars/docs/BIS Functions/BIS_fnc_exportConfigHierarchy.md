Export config hierarchy of given config.


---
*Syntaxes:*

[config,class] call `BIS_fnc_exportConfigHierarchy`

---
*Example 1:*

```sqf
[ configFile >> "CfgWeapons" ] call BIS_fnc_exportConfigHierarchy;
```

*Example 2:*

```sqf
[ configFile >> "CfgWeapons", "LandVehicle" ] call BIS_fnc_exportConfigHierarchy;
```