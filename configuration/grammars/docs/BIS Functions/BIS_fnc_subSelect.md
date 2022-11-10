Returns a sub-selection of the passed array.


---
*Syntaxes:*

[array, start, endOrLength] call `BIS_fnc_subSelect`

---
*Example 1:*

```sqf
private _array = ["a", "b", true, 3, 8];
[_array, 2] call BIS_fnc_subSelect;			// returns [true,3,8]
```

*Example 2:*

```sqf
[_array, -2] call BIS_fnc_subSelect;			// returns [3,8]
```

*Example 3:*

```sqf
[_array, 1, 3] call BIS_fnc_subSelect;			// returns ["b",true,3]
```

*Example 4:*

```sqf
[_array, 1, -2] call BIS_fnc_subSelect;		// returns ["b",true]
```