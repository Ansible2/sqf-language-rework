This command is an alias for **`compile`(Final) (prefixHeader + `preprocessFileLineNumbers` path)**. See description of `preprocessFileLineNumbers` for more details.<br>
In addition, this command can also compile `SQF Bytecode` files, which can reduce compilation time.


---
*Syntaxes:*

`compileScript` [path, final, prefixHeader]

---
*Example 1:*

```sqf
compileScript ["a3\props_f_enoch\military\equipment\scripts\meteo.sqf"];
// has the same functionality as 
compile preprocessFileLineNumbers "a3\props_f_enoch\military\equipment\scripts\meteo.sqf";
```