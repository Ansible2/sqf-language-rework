Clamps vector values between provided min/max boundaries.


---
*Syntaxes:*

[vector, min, max] call `BIS_fnc_clampVector`

---
*Example 1:*

```sqf
private _newVelocity = [velocity vehicle player, -100, 100] call BIS_fnc_clampVector;
vehicle player setVelocity _newVelocity;
```