Convert number to NATO phonetical alphabet word (e.g. 2 becomes "Bravo") or letter of alphabet.


---
*Syntaxes:*

[integer, short] call `BIS_fnc_phoneticalWord`

---
*Example 1:*

```sqf
[1] call BIS_fnc_phoneticalWord; // returns "Alpha"
```

*Example 2:*

```sqf
[1, true] call BIS_fnc_phoneticalWord; // returns "A"
```