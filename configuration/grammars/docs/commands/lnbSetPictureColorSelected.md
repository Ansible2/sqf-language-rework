Sets the cell picture's colour on cell selection.


---
*Syntaxes:*

`lnbSetPictureColorSelected` [idc, [row, column], colour]

ctrl `lnbSetPictureColorSelected` [<nowiki/>[row, column], colour]

---
*Example 1:*

```sqf
lnbSetPictureColorSelected [1492, [1,0], [0,0.75,0.3,0.5]];
```

*Example 2:*

```sqf
ctrl lnbSetPictureColorSelected [[0, 3], [1,0,0,1]];
```