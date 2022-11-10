Function that rounds specified number to specified amount of decimals.


---
*Syntaxes:*

[number, precision] call `BIS_fnc_cutDecimals`

---
*Example 1:*

```sqf
private _cutDecimals = [33.3333, 1] call BIS_fnc_cutDecimals; // returns 33.3
```