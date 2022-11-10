Play set of ambient animations on given unit AND allows the unit to leave the ambient state and engage enemy or move away.


---
*Syntaxes:*

[unit, animationSet, equipmentLevel, condition, behaviour] call `BIS_fnc_ambientAnimCombat`

---
*Example 1:*

```sqf
[_unit, "STAND", "FULL", { (player distance _this) < 5 }] call BIS_fnc_ambientAnimCombat;
```