Sets the color of the item (right) with the given index of the listbox or combobox with id idc of the topmost user `dialog` to color.


---
*Syntaxes:*

`lbSetColorRight`  [idc, index, color]

control `lbSetColorRight`  [index, color]

---
*Example 1:*

```sqf
lbSetColorRight [101, 0, [0, 1, 0, 0.5]];
```

*Example 2:*

```sqf
_control lbSetColorRight [0, [0, 1, 0, 0.5]];
```