AEROBATICS `custom waypoint`.

Player must perform all the required manoeuvres:
* "hover_turn_360"
* "hover_bow"
* "fast_turn_180"
* "backwards"
* "strafe"


---
*Syntaxes:*

`Custom Waypoint arguments`: [visuals, detectionCode, completionCode]

---
*Example 1:*

```sqf
[player, { hint "OK, start!" }, { hint "success!" }] spawn BIS_fnc_wpAerobatics;
```