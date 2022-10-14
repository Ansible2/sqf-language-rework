Sets the color of the item with the given position of the 2D listbox. Color is in format `Color (RGBA)`.


---
*Syntaxes:*

`lnbSetColor` [idc, [row, column], color]

ctrl `lnbSetColor` [<nowiki/>[row, column], color]

---
*Example 1:*

```sqf
_ctrl lnbSetColor [[0,0], [1,0,0,1]];
```