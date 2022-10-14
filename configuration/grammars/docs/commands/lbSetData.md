Sets the additional text (invisible) in the item with the given index of the listbox or combobox with id idc of the topmost user `dialog` to the given data.


---
*Syntaxes:*

`lbSetData` [idc, index, data]

control `lbSetData` [index, data]

---
*Example 1:*

```sqf
lbSetData [101, 1, "#1"];
```

*Example 2:*

```sqf
_control lbSetData [1, "#1"];
```