Fills the first passed control with game type and version number, and positions both controls according to the game type.


---
*Syntaxes:*

[gameTypeVersionControl, modControl] call `BIS_fnc_versionInfo`

---
*Example 1:*

```sqf
[_ctrlVersion, _ctrlModded] call BIS_fnc_versionInfo;
```