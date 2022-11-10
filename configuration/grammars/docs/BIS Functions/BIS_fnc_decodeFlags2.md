Decodes a single scalar into array of unique binary flags (zeroes or ones).


---
*Syntaxes:*

[value, size] call `BIS_fnc_decodeFlags2`

---
*Example 1:*

```sqf
private _result = 13 call BIS_fnc_decodeFlags2; // returns [1,0,1,1]
```

*Example 2:*

```sqf
private _result = [13, 8] call BIS_fnc_decodeFlags2; // returns [1,0,1,1,0,0,0,0]
```