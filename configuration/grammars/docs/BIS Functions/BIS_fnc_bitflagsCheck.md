Checks if one or more flags are set in the given flagset, represented with decimal or hexadecimal number<br>
(Hexadecimal number representation is simply auto-converted into decimal by the engine)<br>
In other words, it simply performs a `bitwise AND (&)` operation on the two numbers: **flags & flagset > 0**<br>
To check which flags are present in given flagset use `BIS_fnc_bitflagsToArray`<br><br>


---
*Syntaxes:*

[flagset, flag] call `BIS_fnc_bitflagsCheck`

---
*Example 1:*

```sqf
[2 + 4 + 8, 8] call BIS_fnc_bitflagsCheck; // true
[2 + 4 + 8, 2 + 32] call BIS_fnc_bitflagsCheck; // true
[2 + 4 + 8, 1] call BIS_fnc_bitflagsCheck; // false
[2 + 4 + 8, 1 + 32] call BIS_fnc_bitflagsCheck; // false
```