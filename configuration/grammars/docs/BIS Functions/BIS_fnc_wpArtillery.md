Let group members fire artillery barrage on waypoint position. Units must have magazine type.


---
*Syntaxes:*

[group, position, target, firedRounds, type] call `BIS_fnc_wpArtillery`

---
*Example 1:*

```sqf
[group player, getMarkerPos "artilleryStrike", objNull, 30, "8Rnd_82mm_Mo_shells"] call BIS_fnc_wpArtillery;
```