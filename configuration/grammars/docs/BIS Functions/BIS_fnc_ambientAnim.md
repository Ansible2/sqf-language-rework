Play set of ambient animations on given unit. If the unit should react to combat, use `BIS_fnc_ambientAnimCombat` instead.


---
*Syntaxes:*

[unit, animationSet, equipmentLevel, snapTo, interpolate, attachToLogic] call `BIS_fnc_ambientAnim`

---
*Example 1:*

```sqf
[player, "STAND1", "ASIS"] call BIS_fnc_ambientAnim;
```

*Example 2:*

```sqf
// will search for a chair within 2 meters around the unit and will place the unit on it
[_unit, "SIT", "NONE"] call BIS_fnc_ambientAnim;
```