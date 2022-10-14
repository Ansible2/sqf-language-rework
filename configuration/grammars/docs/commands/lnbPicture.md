Returns the picture name or path of the item with the given position of the 2D listbox.


---
*Syntaxes:*

`lnbPicture` [idc, [row, column]]

control `lnbPicture`  [row, column]

---
*Example 1:*

```sqf
lnbPicture [200, [1, 1]];
```

*Example 2:*

```sqf
_control lnbPicture [1, 1]; // "a3\ui_f\data\gui\cfg\ranks\corporal_gs.paa"
```