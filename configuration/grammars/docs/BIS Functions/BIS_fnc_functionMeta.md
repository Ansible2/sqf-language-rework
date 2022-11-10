Returns function's meta data.


---
*Syntaxes:*

functionName call `BIS_fnc_functionMeta`

---
*Example 1:*

```sqf
// returns ["A3\functions_f\Debug\fn_functionMeta.sqf", ".sqf", 0, false, false, false, "A3", "Debug", "functionMeta"]
"BIS_fnc_functionMeta" call BIS_fnc_functionMeta;
```

*Example 2:*

```sqf
// returns ["", "", 0, false, false, false, "", "", ""]
"unknownFunction" call BIS_fnc_functionMeta;
```