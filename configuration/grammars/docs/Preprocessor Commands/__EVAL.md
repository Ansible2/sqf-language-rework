With this Config Parser macro expressions can be evaluated, including previously assigned internal variables. Unlike `__EXEC`, `__EVAL` supports multiple parentheses:

```cpp
w = __EVAL(safeZoneW - (5 * ((1 / (getResolution select 2)) * 1.25 * 4)));
```

`__EVAL` macros must be assigned to a config property and the expression must be terminated with `;`. `__EVAL` can only return `Number` or `String`: . Any other type is represented as `String`, even Boolean type, which will result in either `"true"` or `"false"`.

#### WARNING:
`__EVAL` does not like curly brackets `{}`; if code is needed in the expression, use `compile` `String` instead:

```sqf
result = __EVAL(call { 123 }); // ERROR
```

```sqf
result = __EVAL(call compile "123"); // OK
```


#### CAUTION:
`__EXEC` and `__EVAL` macros are not suitable for SQF/SQS scripts but can be used in configs, including `description.ext`. Both global and local variables set in `__EXEC` are available in `__EVAL`