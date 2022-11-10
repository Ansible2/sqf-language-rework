TRANSPORT `custom waypoint`.

Player must pick up group of units in their location.
Get in AI pathfinding is supressed (to avoid unwanted behaviour on building roofs), units are teleported into player's vehicle instead.


---
*Syntaxes:*

`Custom Waypoint arguments`: none

---
*Example 1:*

```sqf
[player, dude, 100] spawn BIS_fnc_wpTransport;
```