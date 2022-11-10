Plays back input weapon fire data on input unit.


---
*Syntaxes:*

[unit, data, stateIgnore] spawn `BIS_fnc_unitPlayFiring`

---
*Example 1:*

```sqf
private _capturedFireData = `2.135,"GAU8","<NULL-object>"`;
[BIS_Vehicle, _capturedData, true] spawn BIS_fnc_unitPlayFiring;
```