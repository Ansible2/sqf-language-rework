Sets string data to item on given path. IDC means id of parent Tree View.


---
*Syntaxes:*

`tvSetData` [idc, path, data]

ctrl `tvSetData` [path, data]

---
*Example 1:*

```sqf
tvSetData [101, [0], "Test data"];
```

*Example 2:*

```sqf
_ctrl tvSetData [[0,0,0], "Test data"];
```