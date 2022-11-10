FORMATION `custom waypoint`.

Player must stay within certain radius and angle towards followed vehicle.


---
*Syntaxes:*

`Custom Waypoint arguments`: [failCode, maxTime, relPos, diffAlt, visualize]

---
*Example 1:*

```sqf
[player, dude, 80, { HSim_keptFormation = false }, -60, [80,160], 20, true] spawn BIS_fnc_wpFormation;
```