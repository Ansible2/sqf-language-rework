Returns the provided set closest number to the target number.


---
*Syntaxes:*

[values, value] call `BIS_fnc_nearestNum`

---
*Example 1:*

```sqf
private _closestValueTo4 = [[1,5,10], 4] call BIS_fnc_nearestNum; // returns 5
```