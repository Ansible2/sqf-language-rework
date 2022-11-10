Given two different vectors A and B, think of a straight line drawn between them, `alpha` saying how far along that line is the wanted vector.


---
*Syntaxes:*

[currentValue, targetValue, alpha] call `BIS_fnc_lerpVector`

---
*Example 1:*

```sqf
[[1592.74,6558.36,0], [2240.43,7459.69,0], 0.3] call BIS_fnc_lerpVector; // returns [1787.05,6828.76,0]
```