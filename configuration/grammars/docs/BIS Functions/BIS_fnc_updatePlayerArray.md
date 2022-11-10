Updates dead player objects to their current respawned objects.


---
*Syntaxes:*

[input] call `BIS_fnc_updatePlayerArray`

---
*Example 1:*

```sqf
private _newPlayerObjects = _oldPlayerObjects call BIS_fnc_updatePlayerArray;
```