Converts expression into a number. Can also convert array of expressions into an array of numbers. If expression does not return a number, 0 is returned.


---
*Syntaxes:*

[input] call `BIS_fnc_parseNumberSafe`

---
*Example 1:*

```sqf
[safeZoneX, safeZoneWAbs, configFile] call BIS_fnc_parseNumberSafe; // returns [-0.452381,1.90476,0]
```

*Example 2:*

```sqf
["1337", "2013", date] call BIS_fnc_parseNumberSafe; // returns [1337,2013,[2036,1,1,6,58]]
```

*Example 3:*

```sqf
[west, east, independent, civilian] call BIS_fnc_parseNumberSafe; // returns [1,0,2,3]
```