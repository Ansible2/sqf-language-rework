Sets tooltip for item with given index of the listbox or combobox with id idc of the topmost user dialog to the given data.


---
*Syntaxes:*

`lbSetTooltip` [idc, index, tooltip]

control `lbSetTooltip` [index, tooltip]

---
*Example 1:*

```sqf
lbSetTooltip [101, 1, "tooltip"];
```

*Example 2:*

```sqf
_control lbSetTooltip [0, "another tooltip"];
```