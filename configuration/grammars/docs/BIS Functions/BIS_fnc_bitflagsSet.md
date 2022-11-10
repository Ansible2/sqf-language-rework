Sets one or more flags in the given flagset, represented with decimal or hexadecimal number<br>
(Hexadecimal number representation is simply auto-converted into decimal by the engine)<br>
To check which flags are present in given flagset use `BIS_fnc_bitflagsToArray`<br><br>
`Limitations`:<br>
Due to various limitations of the Real Virtuality engine this function is 
intended to work with unsigned 24 bit integers only. This means that the 
supported range is 2^0...2^24 (1...16777216)


---
*Syntaxes:*

[flagset, flag] call `BIS_fnc_bitflagsSet`

---
*Example 1:*

```sqf
[0, 16] call BIS_fnc_bitflagsSet; // 16
[16, 2] call BIS_fnc_bitflagsSet; // 18 (which is 2 + 16)
[18, 2 + 8 + 16] call BIS_fnc_bitflagsSet; // 26 (which is 2 + 8 + 16)
```