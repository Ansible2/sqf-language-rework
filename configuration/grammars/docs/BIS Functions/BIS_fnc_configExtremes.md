Scan config paths and return min and max values for each property.<br>
Can be used only for properties of type `Number` and `Array` (value is considered to be the geometric mean of all numbers in the array).


---
*Syntaxes:*

[paths, properties, propertyTypes, propertyDefaults] call `BIS_fnc_configExtremes`

---
*Example 1:*

```sqf
private _paths = [configFile >> "CfgWeapons"] call BIS_fnc_returnChildren;
[_paths, ["maxRange", "reloadTime"]] call BIS_fnc_configExtremes;
```