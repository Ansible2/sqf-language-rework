Performs bitwise AND operation on two decimal or hexadecimal unsigned 24 bit integers <br>(Hexadecimal number representation is simply auto-converted into decimal by the engine)<br><br>
`Limitations`:<br>
Due to various limitations of the Real Virtuality engine this function is 
intended to work with unsigned 24 bit integers only. This means that the 
supported range is 2^0...2^24 (1...16777216)


---
*Syntaxes:*

[num1, num2] call `BIS_fnc_bitwiseAND`

---
*Example 1:*

```sqf
[2 + 4 + 8 + 32, 1] call BIS_fnc_bitwiseAND; // 0
[2 + 4 + 8 + 32, 2] call BIS_fnc_bitwiseAND; // 2
[1 + 2 + 16 + 32, 4 + 8] call BIS_fnc_bitwiseAND; // 0
[1 + 2 + 16 + 32, 4 + 32] call BIS_fnc_bitwiseAND; // 32
[1 + 2 + 16 + 32, 16 + 32] call BIS_fnc_bitwiseAND; // 48
```