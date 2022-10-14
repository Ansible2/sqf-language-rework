Sets the disabled color of second (right aligned) picture of the item with the given index of the listbox with id idc of the topmost user dialog to the given color.
Color which consists from only zeros means disable this override.


---
*Syntaxes:*

`lbSetPictureRightColorDisabled` [idc, index, color]

control `lbSetPictureRightColorDisabled`  [index, color]

---
*Example 1:*

```sqf
lbSetPictureRightColorDisabled [101, 0, [1, 1, 1, 0.25]];
```

*Example 2:*

```sqf
_ctrl lbSetPictureRightColorDisabled [0, [1, 1, 1, 0.25]];
```