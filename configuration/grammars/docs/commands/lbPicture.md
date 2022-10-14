Returns the picture name of the item with the given index of the listbox or combobox with id idc of the topmost user `dialog`.


---
*Syntaxes:*

`lbPicture` [idc, index]

control `lbPicture` index

---
*Example 1:*

```sqf
_picture = lbPicture [101, 0];
```

*Example 2:*

```sqf
_picture = _control lbPicture 0;
```