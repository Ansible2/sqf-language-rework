Returns mission end type and how it was ended or an empty array [] is mission was not ended.


---
*Syntaxes:*

`missionEnd`

---
*Example 1:*

```sqf
private _endInfo = missionEnd;
```

*Example 2:*

```sqf
missionEnd params ["_endType", "_failMission", "_isFailed"];
```