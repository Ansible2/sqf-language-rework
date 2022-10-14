Sets the cell's right-picture. The picture is set to the end of the `row`, the `column` parameter does not matter.


---
*Syntaxes:*

`lnbSetPictureRight` [idc, [row, column], path]

ctrl `lnbSetPicture` [<nowiki/>[row, column], path]

---
*Example 1:*

```sqf
lnbSetPictureRight [1, [0, 0], "Picture.paa"];
```

*Example 2:*

```sqf
_ctrl lnbSetPictureRight [ [0, 0], "\A3\Ui_f\data\GUI\Cfg\Ranks\lieutenant_gs.paa"];
```