Creates ambient airplanes fly-by near airports around the `player`. It will automatically get classes from <sqf inline>configFile >> "CfgVehicles"
``` on all planes that have "ambientType" attribute > 0.


---
*Syntaxes:*

[quantity, areaRadius, dirStep] call `BIS_fnc_ambientPlanes`

---
*Example 1:*

```sqf
[] call BIS_fnc_ambientPlanes;
```

*Example 2:*

```sqf
[30, 3000] call BIS_fnc_ambientPlanes;
```