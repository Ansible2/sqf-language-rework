Selects the item with the given index in the listbox, listnbox, combobox, xcombobox, xlistbox<br>
 For listbox of style LB_MULTI use `lbSetSelected` instead.<br>
`CT_COMBO` does not allow deselecting entries, it will instead select the first one as it is not a combobox usual behaviour.
If you really need to deselect a combobox, see `DreadedEntity's note`.


---
*Example 1:*
```sqf
lbSetCurSel [101, 0];
```

*Example 2:*
```sqf
_control lbSetCurSel 0;
```