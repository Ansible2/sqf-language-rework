Returns the index of the selected item of the `CT_LISTBOX`, `CT_LISTNBOX`, `CT_COMBO` or `CT_TOOLBOX`. For `CT_LISTBOX` with multi selection enabled use `lbSelection`.


---
*Example 1:*
```sqf
_index = lbCurSel 101;
```

*Example 2:*
```sqf
lbCurSel _ctrl;
```