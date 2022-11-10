Returns the mission author's name preceded by "by", e.g "by Username". See *(Reference HashLink "Description.ext#author")*.


---
*Syntaxes:*

[config, control] call `BIS_fnc_overviewAuthor`

---
*Example 1:*

```sqf
hint format ["%1, %2", briefingName, call BIS_fnc_overviewAuthor];
```

*Example 2:*

```sqf
hint format ["%1, %2", briefingName, [missionConfigFile] call BIS_fnc_overviewAuthor];
```