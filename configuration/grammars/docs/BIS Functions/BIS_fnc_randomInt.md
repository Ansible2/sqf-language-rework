Returns a random integer between the two passed numbers (inclusive). The order of parameters doesn't matter: it can be **[min, max]}} or {{hl|[max, min]**.


---
*Syntaxes:*

[min, max] call `BIS_fnc_randomInt`

---
*Example 1:*

```sqf
[1, 3] call BIS_fnc_randomInt; // will return 1, 2 or 3
```