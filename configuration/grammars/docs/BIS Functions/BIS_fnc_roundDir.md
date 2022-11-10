Round direction to nearest set rounding; used for determining cardinal direction.


---
*Syntaxes:*

[rawDirection, rounding] call `BIS_fnc_roundDir`

---
*Example 1:*

```sqf
player setDir ([getDir player, 45] call BIS_fnc_roundDir);
```

*Example 2:*

```sqf
[204.2, 10] call BIS_fnc_roundDir; // will return 200
```

*Example 3:*

```sqf
[271, 180] call BIS_fnc_roundDir; // will return 360
```

*Example 4:*

```sqf
70 call BIS_fnc_roundDir; // will return 90
```