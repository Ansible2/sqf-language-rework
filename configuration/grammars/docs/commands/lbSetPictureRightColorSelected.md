Sets the selected color of the second (right aligned) picture of the item with the given index of the listbox with id idc of the topmost user dialog to the given color.
Color which consists from only zeros means disable this override.


---
*Example 1:*
```sqf
lbSetPictureRightColorSelected [101, 0, [0, 1, 0, 0.5]];
```

*Example 2:*
```sqf
_ctrl lbSetPictureRightColorSelected [0, [1, 1, 1, 1]];
```