Returns array with all bit flags which are set in the given flagset<br><br>
`Limitations`:<br>
Due to various limitations of the Real Virtuality engine this function is 
intended to work with unsigned 24 bit integers only. This means that the 
supported range is 2^0...2^24 (1...16777216)


---
*Syntaxes:*

flagset call `BIS_fnc_bitflagsToArray`

---
*Example 1:*

```sqf
15 call BIS_fnc_bitflagsToArray; // [1,2,4,8]
2342 call BIS_fnc_bitflagsToArray; // [2,4,32,256,2048]
[2 + 4 + 8] call BIS_fnc_bitflagsToArray; // [2,4,8]
[2 + 2 + 2 + 4 + 8 + 8 + 8] call BIS_fnc_bitflagsToArray; // [2,32]
```