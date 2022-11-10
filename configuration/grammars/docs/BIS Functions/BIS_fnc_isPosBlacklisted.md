Function checks a blacklist and sees if the given position is in it or not.


---
*Syntaxes:*

[position, blacklistArea] call `BIS_fnc_isPosBlacklisted`

---
*Example 1:*

```sqf
`50,50], [[0,0], [100,100]` call BIS_fnc_isPosBlacklisted;
```

*Example 2:*

```sqf
[getPosATL player, myTrigger] call BIS_fnc_isPosBlacklisted;
```