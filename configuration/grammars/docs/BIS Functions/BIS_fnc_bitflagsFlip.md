Flips one or more flags (set gets unset and vice versa) in the given flagset, represented with decimal or hexadecimal number<br>
(Hexadecimal number representation is simply auto-converted into decimal by the engine)<br>
To check which flags are present in given flagset use `BIS_fnc_bitflagsToArray`<br><br>
`Limitations`:<br>
Due to various limitations of the Real Virtuality engine this function is 
intended to work with unsigned 24 bit integers only. This means that the 
supported range is 2^0...2^24 (1...16777216)


---
*Syntaxes:*

[flagset, flag] call `BIS_fnc_bitflagsFlip`

---
*Example 1:*

```sqf
[1 + 16, 8] call BIS_fnc_bitflagsFlip; // 25 (which is 1 + 8 + 16)
[25, 8] call BIS_fnc_bitflagsFlip; // 17 (which is 1 + 16)
[2 + 4 + 8, 2 + 8] call BIS_fnc_bitflagsFlip; // 4
[4, 2 + 8] call BIS_fnc_bitflagsFlip; // 14 (which is 2 + 4 + 8)
```