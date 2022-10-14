Sets cell's right-aligned text. Does not replace `cell's text`.


---
*Syntaxes:*

`lnbSetTextRight` [idc, [row, column], text]

ctrl `lnbSetTextRight` [<nowiki/>[row, column], text]

---
*Example 1:*

```sqf
lnbSetTextRight [1492, [1,0], "right text"];
```

*Example 2:*

```sqf
_ctrl lnbSetTextRight [[0, 3], "right text"];
```