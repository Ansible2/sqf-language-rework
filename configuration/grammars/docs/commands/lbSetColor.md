Sets the color of the item (left) with the given index of the listbox or combobox with id idc of the topmost user `Dialog` to color.


---
*Syntaxes:*

`lbSetColor` [idc, index, color]

control `lbSetColor` [index, color]

---
*Example 1:*

```sqf
lbSetColor [101, 0, [0, 1, 0, 0.5]];
```

*Example 2:*

```sqf
_control lbSetColor [0, [0, 1, 0, 0.5]];
```