Returns colour of define side either as `Array` in format RGBA or the name of the colour as `String`


---
*Syntaxes:*

[side, returnString] call `BIS_fnc_sideColor`

---
*Example 1:*

```sqf
[blufor, false] call BIS_fnc_sideColor; // returns [0,0.3,0.6,1]
```

*Example 2:*

```sqf
[blufor,  true] call BIS_fnc_sideColor; // returns "ColorWEST"
```