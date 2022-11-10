Gets list and sides of current factions.


---
*Syntaxes:*

[parameter] call `BIS_fnc_getFactions`

---
*Example 1:*

```sqf
call BIS_fnc_getFactions; // returns all factions
```

*Example 2:*

```sqf
[] call BIS_fnc_getFactions; // same as Example 1
```

*Example 3:*

```sqf
[player] call BIS_fnc_getFactions; // returns index of player's faction
```

*Example 4:*

```sqf
["BLU_F"] call BIS_fnc_getFactions; // returns index of given faction
```

*Example 5:*

```sqf
`` call BIS_fnc_getFactions; // will return all faction sides
```

*Example 6:*

```sqf
`player` call BIS_fnc_getFactions; // will return player's side
```