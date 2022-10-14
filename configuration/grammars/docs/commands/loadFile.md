Returns the content of given files. If you plan to `compile` said string, be aware that the file should not contain comments or `compile` will throw an error. If there are comments, use `preprocessFile`/`preprocessFileLineNumbers` instead.


---
*Syntaxes:*

`loadFile` fileName

---
*Example 1:*

```sqf
_contents = loadFile "wantedString.txt";
```

*Example 2:*

```sqf
_contents = compile loadFile "myFunction.sqf"; // will compile string into code
```