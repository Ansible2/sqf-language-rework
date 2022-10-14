Sets the left picture in the row with given index of `CT_LISTBOX` or `CT_COMBO`. The picture is searched for in the mission directory, the dtaExt subdirectory of the campaign directory and the dtaExt directory and the data bank (or directory).<br>


---
*Syntaxes:*

`lbSetPicture` [idc, index, path]

control `lbSetPicture`  [index, path]

---
*Example 1:*

```sqf
lbSetPicture [101, 0, "iskoda.paa"];
```

*Example 2:*

```sqf
_control lbSetPicture [0, "iskoda.paa"];
```

*Example 3:*

```sqf
private _path = _ctrlTV tvAdd [[], "Some Entry"];
[_ctrlTV, _path] spawn {
	(_this select 0) tvSetPictureRight [[_this select 1], "someImage.paa"];
};
```