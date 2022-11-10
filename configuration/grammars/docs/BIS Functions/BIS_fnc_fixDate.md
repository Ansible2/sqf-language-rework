Checks the array with date data and makes sure the values are within the boundries.


---
*Syntaxes:*

date call `BIS_fnc_fixDate`

---
*Example 1:*

```sqf
private _fixedDate = [2033, -2, 89, 25, 75] call BIS_fnc_fixDate;
```