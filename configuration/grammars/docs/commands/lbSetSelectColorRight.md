Sets the select color of the of the secondary text (right aligned) of the item with the given index of the listbox or combobox with id idc of the topmost user `dialog` to color.


---
*Syntaxes:*

`lbSetSelectColorRight` [idc, index, color]

control `lbSetSelectColorRight` [index, color]

---
*Example 1:*

```sqf
lbSetSelectColorRight [101, 0, [0, 1, 0, 0.5]];
```

*Example 2:*

```sqf
_control lbSetSelectColorRight [0, [0, 1, 0, 0.5]];
```