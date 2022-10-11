Return workshop-compatible currently loaded mission file (path to mission.pbo, relative to game exe).

{{Feature | Informative |
* `missionName` will return the Workshop user-friendly mission name, whereas `missionNameSource` will take the information from `mission.sqm`.
* pre-v2.02 missions may return an empty string.


---
*Example 1:*
```sqf
hint format ["You are playing mission ""%1""", missionNameSource];
```