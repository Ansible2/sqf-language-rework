Instantly set date and share it across network with optional transition effect.


---
*Syntaxes:*

[value, global, transition] call `BIS_fnc_setDate`

---
*Example 1:*

```sqf
[[2035, 12, 31, 23, 59], true, true] call BIS_fnc_setDate;
```

*Example 2:*

```sqf
[4, true, true] call BIS_fnc_setDate; // skip 4 hours. Same as image in description
```

*Example 3:*

```sqf
[30 / 60, true, true] call BIS_fnc_setDate; // skip 30 minutes and show `30 minutes later` message
```