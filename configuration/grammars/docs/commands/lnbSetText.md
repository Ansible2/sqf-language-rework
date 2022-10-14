Sets the text in the item with the given position of the 2D listbox.


---
*Syntaxes:*

`lnbSetText` [idc, [row, column], data]

ctrl `lnbSetText` [<nowiki/>[row, column], data]

---
*Example 1:*

```sqf
lnbSetText [101, [0,1], "#1"];
```

*Example 2:*

```sqf
_ctrl lnbSetText [[0,1], "#1"];
```