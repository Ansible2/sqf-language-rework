Round a number to the provided factor.


---
*Syntaxes:*

[number, factor, secondary factor] call `BIS_fnc_roundNum`

---
*Example 1:*

```sqf
[10.254,2,3] call BIS_fnc_roundNum;//Returns 9
```

*Example 2:*

```sqf
[10.254,1,3] call BIS_fnc_roundNum;//Returns 10
```