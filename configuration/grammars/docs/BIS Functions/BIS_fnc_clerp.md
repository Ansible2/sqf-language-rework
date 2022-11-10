CLerp - Circular Lerp - is like lerp but handles the wraparound from 0 to 360
 This is useful when interpolating eulerAngles and the object crosses the 0/360 boundary
 The standard Lerp function causes the object to rotate in the wrong direction, clerp fixes that


---
*Syntaxes:*

[currentValue, targetValue, alpha] call `BIS_fnc_clerp`

---
*Example 1:*

```sqf
[90,170,0.1] call BIS_fnc_clerp; // Returns 98
```