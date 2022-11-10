Shows advanced hint to player.


---
*Syntaxes:*

[classes, duration1, condition1, duration2, condition2, showing, onlyFullHint, onlyOnce, useSound] call `BIS_fnc_advHint`

---
*Example 1:*

```sqf
`"Common", "GPS"` call BIS_fnc_advHint;
```

*Example 2:*

```sqf
[["Common", "GPS"], 15, "", 35, "", false, false, false, true] call BIS_fnc_advHint; // default
```