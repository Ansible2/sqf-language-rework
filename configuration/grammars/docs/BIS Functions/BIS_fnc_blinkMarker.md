Makes given marker blink.


---
*Syntaxes:*

[marker, blinkDuration, blinkAmount] spawn `BIS_fnc_blinkMarker`

---
*Example 1:*

```sqf
["BIS_marker", 3, 10] spawn BIS_fnc_blinkMarker; // blinks `10` times using `3` seconds intervals
```

*Example 2:*

```sqf
["BIS_marker"] spawn BIS_fnc_blinkMarker; // keeps blinking
```