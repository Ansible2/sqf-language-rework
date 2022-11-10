End a mission if all players are dead `and` there are no more respawn tickets (if any).
* `Standard syntax` is for when `Respawn` is "NONE", "BIRD", "GROUP" or "SIDE"
* `Alternative syntax` is for when `Respawn` is "INSTANT" or "BASE"


---
*Syntaxes:*

call `BIS_fnc_respawnEndMission`

unit call `BIS_fnc_respawnEndMission`

---
*Example 1:*

```sqf
call BIS_fnc_respawnEndMission;
```

*Example 2:*

```sqf
player call BIS_fnc_respawnEndMission;
```