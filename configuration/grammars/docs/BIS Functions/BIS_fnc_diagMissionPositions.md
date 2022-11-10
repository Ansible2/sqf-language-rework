Displays positions of units from all missions


---
*Syntaxes:*

[configPath, allUnits, isCampaign] call `BIS_fnc_diagMissionPositions`

---
*Example 1:*

```sqf
[configFile >> "CfgMissions", true, false] call BIS_fnc_diagMissionPositions;
```