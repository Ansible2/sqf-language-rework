Sets skill for an entire AI side. The skill will be calculated using a lerp function. Function will take player as multiplier.


---
*Syntaxes:*

[side,skillMin,skillAimMin,skillMax,skillAimMax] call `BIS_fnc_EXP_camp_setSkill`

---
*Example 1:*

```sqf
[WEST,0.1,0.2,0.7,0.6] call BIS_fnc_EXP_camp_setSkill;
```