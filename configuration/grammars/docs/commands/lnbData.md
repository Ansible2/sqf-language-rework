Returns the additional text (invisible) in an item with the given position of the 2D listbox.


---
*Syntaxes:*

`lnbData` [idc, [row, column]]

ctrl `lnbData` [row, column]

---
*Example 1:*

```sqf
_ctrl lnbData [lnbCurSelRow _ctrl,0]; // "#1"
```