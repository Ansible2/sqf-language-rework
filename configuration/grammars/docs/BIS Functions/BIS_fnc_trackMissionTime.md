Tracks mission time by storing time in `profileNamespace`.


---
*Syntaxes:*

[save, delete] call `BIS_fnc_trackMissionTime`

---
*Example 1:*

```sqf
[true, true] call BIS_fnc_trackMissionTime; // Delete saved mission time
```

*Example 2:*

```sqf
[true] call BIS_fnc_trackMissionTime; // Save mission time
```