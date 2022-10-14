Sets picture to item selected by path. IDC means id of parent Tree View. Name is picture name. The picture is searched in the mission directory.


---
*Syntaxes:*

`tvSetPicture` [idc, path, name]

control `tvSetPicture` [path, name]

---
*Example 1:*

```sqf
tvSetPicture [101, [0], "picture"];
```

*Example 2:*

```sqf
_ctrl tvSetPicture [[0,0,0], getText (configFile >> "CfgWeapons" >> "optic_NVS" >> "picture")];
```