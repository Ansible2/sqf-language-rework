Performs bitwise XOR operation on two decimal or hexadecimal unsigned 24 bit integers <br>(Hexadecimal number representation is simply auto-converted into decimal by the engine)<br><br>
`Limitations`:<br>
Due to various limitations of the Real Virtuality engine this function is 
intended to work with unsigned 24 bit integers only. This means that the 
supported range is 2^0...2^24 (1...16777216)


---
*Syntaxes:*

[num1, num2] call `BIS_fnc_bitwiseXOR`

---
*Example 1:*

```sqf
[1 + 4 + 16, 1] call BIS_fnc_bitwiseXOR; // 20
[1 + 2 + 32, 4 + 8] call BIS_fnc_bitwiseXOR; // 47
[16 + 32, 4 + 16] call BIS_fnc_bitwiseXOR; // 36
[1 + 16 + 32, 2 + 32] call BIS_fnc_bitwiseXOR; // 19
```