Unsets one or more flags in the given flagset, represented with decimal or hexadecimal number<br>
(Hexadecimal number representation is simply auto-converted into decimal by the engine)<br>
To check which flags are present in given flagset use `BIS_fnc_bitflagsToArray`<br><br>
`Limitations`:<br>
Due to various limitations of the Real Virtuality engine this function is 
intended to work with unsigned 24 bit integers only. This means that the 
supported range is 2^0...2^24 (1...16777216)


---
*Syntaxes:*

[flagset, flag] call `BIS_fnc_bitflagsUnset`

---
*Example 1:*

```sqf
[2 + 4 + 8, 8] call BIS_fnc_bitflagsUnset; // 6 (which is 2 + 4)
[2 + 4 + 8, 2 + 8] call BIS_fnc_bitflagsUnset; // 4
[2 + 4 + 8, 1 + 8] call BIS_fnc_bitflagsUnset; // 6 (which is 2 + 4)
[2 + 4 + 8, 1 + 8 + 8 + 2 + 2] call BIS_fnc_bitflagsUnset; // 10 (which is 2 + 8, since 1 + 8 + 8 + 2 + 2 is in fact 1 + 4 + 16)
```