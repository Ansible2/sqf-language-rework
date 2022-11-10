Performs bitwise NOT operation on decimal or hexadecimal unsigned 24 bit integer <br>(Hexadecimal number representation is simply auto-converted into decimal by the engine)<br><br>
`Limitations`:<br>
Due to various limitations of the Real Virtuality engine this function is 
intended to work with unsigned 24 bit integers only. This means that the 
supported range is 2^0...2^24 (1...16777216)


---
*Syntaxes:*

num call `BIS_fnc_bitwiseNOT`

---
*Example 1:*

```sqf
873687 call BIS_fnc_bitwiseNOT; // 15903528
[2 + 4 + 8 + 32 + 256 + 1024] call BIS_fnc_bitwiseNOT; // 16775889
```