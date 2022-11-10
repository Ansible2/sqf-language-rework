Returns list of all parent classes.


---
*Syntaxes:*

[config, onlyClassNames] call `BIS_fnc_returnParents`

---
*Example 1:*

```sqf
[ configFile >> "CfgVehicles" >> "Land_FirePlace_F", true ] call BIS_fnc_returnParents;
//Returns ["Land_FirePlace_F","House_F","House","HouseBase","NonStrategic","Building","Static","All"]
```