Returns the additional integer value in the item with the given position of the 2D listbox.


---
*Syntaxes:*

`lnbValue` [idc, [row, column]]

ctrl `lnbValue` [row, column]

---
*Example 1:*

```sqf
_ctrl lnbValue [0,0]; // 1, default is 0 if value is String set by lnbSetValue
```