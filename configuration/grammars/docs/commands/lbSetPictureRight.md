Sets the second (right aligned) picture in the item with the given index of the listbox or combobox with id idc of the topmost user `dialog`. Name is the picture name.
The picture is searched for in the mission directory, the dtaExt subdirectory of the campaign directory and the dtaExt directory and the data bank (or directory).<br>
In {{arma3}} it might be necessary to set the color of the picture as well with `lbSetPictureRightColor` as default [0,0,0,0] color makes the picture invisible.


---
*Syntaxes:*

`lbSetPictureRight` [idc, index, name]

control `lbSetPictureRight` [index, name]

---
*Example 1:*

```sqf
lbSetPictureRight [101, 0, "iskoda"];
```

*Example 2:*

```sqf
_control lbSetPictureRight [0, "iskoda"];
```