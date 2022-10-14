Sets the select color of the item with the given index of the listbox or combobox with id idc of the topmost user `dialog` to color.


---
*Syntaxes:*

`lbSetSelectColor`  [idc, index, color]

control `lbSetSelectColor` [index, color]

---
*Example 1:*

```sqf
lbSetSelectColor [101, 0, [0, 1, 0, 0.5]];
```

*Example 2:*

```sqf
_control lbSetSelectColor [0, [0, 1, 0, 0.5]];
```