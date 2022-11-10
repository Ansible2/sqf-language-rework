Return number from expression


---
*Syntaxes:*

value call `BIS_fnc_parseNumber`

---
*Example 1:*

```sqf
private _result = 7.62 call BIS_fnc_parseNumber;
_result = "7.62" call BIS_fnc_parseNumber;
_result = { 7.62 } call BIS_fnc_parseNumber;
```