Compares all elements of passed array between each other and returns true is all are defined and identical.<br>
Very fast, different from `BIS_fnc_areEqual` in that `nil` values will not be considered equal to each other.


---
*Syntaxes:*

[anything1, anything2, …] call `BIS_fnc_areEqualNotNil`

---
*Example 1:*

```sqf
`1, 2, [3, [4, 5]]],	[1, 2, [3, [4, 5]]`	call BIS_fnc_areEqualNotNil; // true
`1, 2, [3, [4, nil]]],	[1, 2, [3, [4, nil]]`	call BIS_fnc_areEqualNotNil; // false
```

*Example 2:*

```sqf
[nil, nil] call BIS_fnc_areEqualNotNil; // false
```