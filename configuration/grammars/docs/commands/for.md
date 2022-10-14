This operator creates a `For Type` which is used in the for-constructs.


---
*Syntaxes:*

`for` arguments

`for` [init, condition, codeToExecute]

---
*Example 1:*

```sqf
// will output 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 (the to value being inclusive)
for "_i" from 1 to 10 do { systemChat str _i; };
```

*Example 2:*

```sqf
// will output 9, 7, 5, 3, 1
for "_i" from 9 to 1 step -2 do { systemChat str _i; };
```

*Example 3:*

```sqf
// will output 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
for [{ _i = 0 }, { _i < 10 }, { _i = _i + 1 }] do { systemChat str _i };
```

*Example 4:*

```sqf
// BAD CODE
_i = 100;
for [{ _i = 0 }, { _i < 5 }, { _i = _i + 1 }] do { /* code */ };
hint str _i; // 5

// GOOD CODE (private keyword is recommended)
_i = 100;
for [{ private _i = 0 }, { _i < 5 }, { _i = _i + 1 }] do { /* code */ };
hint str _i; // 100

// BEST CODE (primary syntax, fastest)
_i = 100;
for "_i" from 0 to 4 do { /* code */ };
hint str _i; // 100
```