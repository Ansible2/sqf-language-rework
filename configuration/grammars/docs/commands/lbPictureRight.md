Returns the right picture name of the item with the given index of the listbox or combobox with id idc of the topmost user `dialog`.


---
*Syntaxes:*

`lbPictureRight` [idc, index]

control `lbPictureRight` index

---
*Example 1:*

```sqf
_picture = lbPictureRight [101, 0];
```

*Example 2:*

```sqf
_picture = _control lbPictureRight 0;
```