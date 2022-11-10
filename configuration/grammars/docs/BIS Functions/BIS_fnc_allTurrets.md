Returns all vehicle turrets from config with options. Does what `allTurrets` command does, except the param is vehicle's config classname.


---
*Syntaxes:*

vehicleClass call `BIS_fnc_allTurrets`

[vehicleClass, personTurrets] call `BIS_fnc_allTurrets`

---
*Example 1:*

```sqf
private _allTurrets = "C_Offroad_01_F" call BIS_fnc_allTurrets; // []
```

*Example 2:*

```sqf
private _allTurrets = ["C_Offroad_01_F", true] call BIS_fnc_allTurrets; // `0],[1],[2],[3`
```

*Example 3:*

```sqf
private _allTurrets = ["C_Offroad_01_F", false] call BIS_fnc_allTurrets; // []
```