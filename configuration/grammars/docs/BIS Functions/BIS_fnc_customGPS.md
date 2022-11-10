Replaces GPS frame.<br>
The following line `must` be defined in mission `Description.ext`:
```cpp
onMinimapScript[] = {"BIS_fnc_customGPS_Spawn"};
```


---
*Syntaxes:*

[path, `deltaX`, `deltaY`] call `BIS_fnc_customGPS`

---
*Example 1:*

```sqf
["ca\missions_pmc\data\ui_gps_ca.paa", -0.05, 0.16] call BIS_fnc_customGPS;
```