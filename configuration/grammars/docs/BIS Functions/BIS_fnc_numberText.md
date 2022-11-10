Convert a number into string (avoiding scientific notation).


---
*Syntaxes:*

[number, modulo] call `BIS_fnc_numberText`

---
*Example 1:*

```sqf
[4096] call BIS_fnc_numberText; // "4 096"
```

*Example 2:*

```sqf
[512, 1] call BIS_fnc_numberText; // "5 1 2"
```

*Example 3:*

```sqf
[999999999999] call BIS_fnc_numberText; // "909 999 995 904"
```

*Example 4:*

```sqf
[1234.5678] call BIS_fnc_numberText; // "1 234"
```