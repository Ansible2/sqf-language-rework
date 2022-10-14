Sets new value into menu entry on given path.


---
*Syntaxes:*

`menuSetValue` [idc, path, value]

control `menuSetValue` [path, value]

---
*Example 1:*

```sqf
findDisplay 313 displayCtrl 120 menuSetValue [[0, 1], 1337];
```