Function to return the maximum difference between all values in an array.


---
*Syntaxes:*

[arrayOfNumbers] call `BIS_fnc_maxDiffArray`

---
*Example 1:*

```sqf
private _maxDiff = `0, 5, 10, -5` call BIS_fnc_maxDiffArray; // will return 15 (-5 to 10)
```