Sets the additional text (invisible) on the item with the given position of the 2D listbox.


---
*Syntaxes:*

`lnbSetData` [idc, [row, column], data]

ctrl `lnbSetData` [<nowiki/>[row, column], data]

---
*Example 1:*

```sqf
lnbSetData [123, [0,0],"#1"];
```

*Example 2:*

```sqf
_ctrl lnbSetData [[0,0],"#1"];
```