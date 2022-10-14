Returns if menu entry on given path is enabled or not.


---
*Syntaxes:*

`menuEnabled` [idc, path]

control `menuEnabled` path

---
*Example 1:*

```sqf
_isEnabled = findDisplay 313 displayCtrl 120 menuEnabled [0];
```