#### Description:
This Config Parser macro allows to assign values to internal variables or just execute arbitrary code. The code inside `__EXEC` macros runs in `parsingNamespace` and variables defined in it will also be created in `parsingNamespace`. 

The variables can then be used to create more complex macros:
```sqf
__EXEC(cat = 5 + 1;)
__EXEC(lev = cat - 2;)
_cat = parsingNamespace getVariable "cat"; // 6
_lev = parsingNamespace getVariable "lev"; // 4
```

#### CAUTION: 
Config Parser keywords cannot be used in preprocessor Macros, e.g `#if`!

#### WARING: 
`__EXEC` doesn't like round brackets `()` inside expressions. If grouping is needed, perhaps values could be calculated inside the brackets separately and assigned to local variables:
```cpp
__EXEC(a = (1+2);) // ERROR
```

```cpp
__EXEC(_expr = 1+2;)
__EXEC(a = _expr;) // OK
```