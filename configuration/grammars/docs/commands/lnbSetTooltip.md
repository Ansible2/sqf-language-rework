Sets tooltip on the item with the given row and column of `CT_LISTNBOX`.


---
*Syntaxes:*

`lnbSetTooltip` [idc, [row, column], text]

ctrl `lnbSetTooltip` [<nowiki/>[row, column], text]

---
*Example 1:*

```sqf
lnbSetTooltip [1234, [1,0], "tip"];
```

*Example 2:*

```sqf
_ctrl lnbSetTooltip [[3,0], "top"];
```