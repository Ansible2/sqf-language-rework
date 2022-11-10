Returns a random (float) number between the two passed numbers (inclusive). The order of parameters doesn't matter: it can be **[min, max]}} or {{hl|[max, min]**.


---
*Syntaxes:*

[min, max] call `BIS_fnc_randomNum`

---
*Example 1:*

```sqf
[1, 3] call BIS_fnc_randomNum; // can be 1, 3 or any value in-between
```