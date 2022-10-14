Selects the row with the given index of the 2D listbox.


---
*Syntaxes:*

`lnbSetCurSelRow` [idc, index]

ctrl `lnbSetCurSelRow` index

---
*Example 1:*

```sqf
disableSerialization;
_ctrl = (findDisplay 300) displayCtrl 304;
_ctrl lnbSetCurSelRow 1;
```