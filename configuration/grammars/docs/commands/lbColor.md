Returns the text color of the item with the given index of the `CT_LISTBOX` or `CT_COMBO` with IDC of the topmost user `dialog`.


---
*Syntaxes:*

`lbColor`  [idc, index]

control `lbColor`  index

---
*Example 1:*

```sqf
_colour = lbColor [101, 0];
```

*Example 2:*

```sqf
_color = _control lbColor 0;
```