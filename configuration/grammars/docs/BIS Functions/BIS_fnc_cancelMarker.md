Cancels a marker by a red 'X' marker. Also sets its variable to "Canceled" to `true`.


---
*Syntaxes:*

[marker, duration, fadeTime, sizeMultiplier, angleOffset] spawn `BIS_fnc_cancelMarker`

---
*Example 1:*

```sqf
["BIS_marker",2,1.5,75] spawn BIS_fnc_cancelMarker;
```