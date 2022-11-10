RESTRICTED `custom waypoint`.

Player must fly in given limits.


---
*Syntaxes:*

`Custom Waypoint arguments`: [limits, maxTime, failCode, visualize, warnCode]

---
*Example 1:*

```sqf
[player, objNull, 0, [250, -1, 150, -1], 30, { HSim_RestrictedFlight = false }, true] spawn BIS_fnc_wpFormation;
```