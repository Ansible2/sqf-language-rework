Sets the picture in the item with the given position of the 2D listbox.The picture is searched in the mission, directory, the dtaExt subdirectory of the campaign directory, and the dtaExt directory and the data bank (or directory).


---
*Example 1:*
```sqf
lnbSetPicture [1, [0, 0], "Picture"];
```

*Example 2:*
```sqf
_ctrl lnbSetPicture [[0, 0], "\A3\Ui_f\data\GUI\Cfg\Ranks\lieutenant_gs.paa"];
```