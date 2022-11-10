Sets unit insignia (e.g., shoulder insignia on soldiers). See `Arma 3: Unit Insignia` for more details and a list of official insignias.


---
*Syntaxes:*

[target, className] call `BIS_fnc_setUnitInsignia`

---
*Example 1:*

Place insignia:

```sqf
[player, "111thID"] call BIS_fnc_setUnitInsignia;
```

*Example 2:*

Remove insignia:

```sqf
[player, ""] call BIS_fnc_setUnitInsignia;
```