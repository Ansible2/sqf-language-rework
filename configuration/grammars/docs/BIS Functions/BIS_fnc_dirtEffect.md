Screen dirt (texture) postprocess. 
Displays dust PP according to damage obtained from near explosion; takes array from "Explosion" event handler.


---
*Syntaxes:*

[unit, damage] call `BIS_fnc_dirtEffect`

---
*Example 1:*

```sqf
[nil, 0.5] call BIS_fnc_dirtEffect;
```