Check if an object is in front of another object (in the front 180°)


---
*Syntaxes:*

[reference, checked, offset] call `BIS_fnc_isInFrontOf`

---
*Example 1:*

```sqf
private _isInstructorInFrontOfPlayer = [player, instructor, 0] call BIS_fnc_isInFrontOf;
```