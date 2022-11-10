CHECKPOINT `custom waypoint`.

Player has to reach waypoint position with certain precision (as opposed to normal `Move` waypoint, which became completed in around 500m).


---
*Syntaxes:*

`Custom Waypoint arguments`: [posLimit]

---
*Example 1:*

```sqf
[player, getPosASL dude, 10, 2] spawn BIS_fnc_wpCheckpoint;
```