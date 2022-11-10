Display given text smoothly.


---
*Syntaxes:*

[text, nbOfLines, duration, color, outline] call `BIS_fnc_WLSmoothText`

---
*Example 1:*

```sqf
["Hello, hidden FX", 2, 3, [1,0,0,1], true] spawn BIS_fnc_WLSmoothText; // no sounds, letters appear in a smooth transition
```