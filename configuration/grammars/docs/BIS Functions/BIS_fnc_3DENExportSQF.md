Export 3DEN mission to SQF script. When called, the script will dynamically recreate the mission.


---
*Syntaxes:*

[showWindow,exportLayers,center,checkBlacklist] call `BIS_fnc_3DENExportSQF`

---
*Example 1:*

```sqf
[true, false, [1337,1337,0], true] call BIS_fnc_3DENExportSQF;
```