Displays a parameter type error message (using `BIS_fnc_error`) explaining the problem.


---
*Syntaxes:*

[value, method, expected] call `BIS_fnc_errorParamsType`

---
*Example 1:*

```sqf
// show error and abort if input is not of type ARRAY:
if !(_this isEqualType []) exitWith { [_this, "isEqualType", []] call BIS_fnc_errorParamsType; };
```

*Example 2:*

```sqf
// show error and abort if array input is not in format [SCALAR, STRING, BOOL]:
if !(_this isEqualTypeArray [0, "", true]) exitWith { [_this, "isEqualTypeArray", [0, "", true]] call BIS_fnc_errorParamsType; };
```

*Example 3:*

```sqf
// show error and abort if array input is not in format [BOOL, BOOL, BOOL, ...]:
if !(_this isEqualTypeAll true) exitWith { [_this, "isEqualTypeAll", true] call BIS_fnc_errorParamsType; };
```

*Example 4:*

```sqf
// show error and abort if input is neither ARRAY nor OBJECT:
if !(_this isEqualTypeAny `], objNull]) exitWith { [_this, "isEqualTypeAny", [[], objNull` call BIS_fnc_errorParamsType; };
```

*Example 5:*

```sqf
// show error and abort if input is neither of type ARRAY nor array in format [SCALAR, ARRAY, <ANYTHING>, OBJECT]:
if !(_this isEqualTypeParams [0, [], nil, objNull]) exitWith { [_this, "isEqualTypeParams", [0, [], nil, objNull]] call BIS_fnc_errorParamsType; };
```