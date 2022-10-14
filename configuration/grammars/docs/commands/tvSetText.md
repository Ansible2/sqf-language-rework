Sets string text to item on given path. IDC means id of parent Tree View.


---
*Syntaxes:*

`tvSetText` [idc, path, text]

control `tvSetText` [path, text]

---
*Example 1:*

```sqf
tvSetText [101, [0], "Test data"];
```

*Example 2:*

```sqf
_ctrl tvSetText [[0,0,0], "Test data"];
```