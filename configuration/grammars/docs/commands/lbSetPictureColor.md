Sets the color of item's picture (left) with the given index of the listbox with id idc of the topmost user dialog to the given color. Color is in format `Color (RGBA)`. Color which consists from only zeros means disable this override.


---
*Syntaxes:*

`lbSetPictureColor` [idc, index, color]

control `lbSetPictureColor`  [index, color]

---
*Example 1:*

```sqf
lbSetPictureColor [101, 0, [0, 1, 0, 0.5]];
```

*Example 2:*

```sqf
_ctrl lbSetPictureColor [0, [1, 1, 1, 1]];
```