Convert hexcode color into RGBA array format.


---
*Syntaxes:*

[hexString] call `BIS_fnc_HEXtoRGB`

---
*Example 1:*

```sqf
["025D00FF"] call BIS_fnc_HEXtoRGB; // [1,0.843138,0,1]
```

*Example 2:*

Usually HEX code is represented as 3 octet without alpha, so you can add it yourself:

```sqf
[_hexString + "FF"] call BIS_fnc_HEXtoRGB; // Add 4th octet to get alpha
```