Sets scalar data to item on given path. IDC means id of parent Tree View. If the given value is not integer, it will be converted to integer


---
*Syntaxes:*

`tvSetValue` [idc, path, val]

ctrl `tvSetValue` [path, val]

---
*Example 1:*

```sqf
tvSetValue [101, [0], 555];
```

*Example 2:*

```sqf
_ctrl tvSetValue [[0,0,0], 14];
```