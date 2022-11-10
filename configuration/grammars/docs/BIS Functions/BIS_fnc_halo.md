Makes a High Altitude Low Opening (HALO) parachute jump.


---
*Syntaxes:*

[unit, altitude] call `BIS_fnc_halo`

---
*Example 1:*

```sqf
[player] call BIS_fnc_halo; // instantly parachutes the player object
```

*Example 2:*

```sqf
[player, 100] call BIS_fnc_halo; // increases the altitude of player by 100 before HALO
```