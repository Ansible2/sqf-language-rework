Sets the disabled color of item's picture (left) with the given index of the listbox with id idc of the topmost user dialog to the given color. Color is in format `Color (RGBA)`. Color which consists from only zeros means disable this override.


---
*Syntaxes:*

`lbSetPictureColorDisabled` [idc, index, color]

control `lbSetPictureColorDisabled`  [index, color]

---
*Example 1:*

```sqf
lbSetPictureColorDisabled [101, 0, [1, 1, 1, 0.25]];
```

*Example 2:*

```sqf
_ctrl lbSetPictureColorDisabled [0, [1, 1, 1, 0.25]];
```