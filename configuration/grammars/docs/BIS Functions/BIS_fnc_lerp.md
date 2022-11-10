Linear floating point interpolation. *(Reference Wikipedia "Linear_interpolation|Linear Interpolation (Wikipedia)")*


---
*Syntaxes:*

[currentValue,targetValue,alpha] call `BIS_fnc_lerp`

---
*Example 1:*

```sqf
[1,10,0.5] call BIS_fnc_lerp; // Returns 5.5
```