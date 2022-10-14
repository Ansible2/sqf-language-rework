Sets new picture into menu entry on given path. The picture will be replaced by a tick if the entry was set to checkable with `menuSetCheck`.


---
*Syntaxes:*

`menuSetPicture` [idc, path, picture]

control `menuSetPicture` [path, picture]

---
*Example 1:*

```sqf
findDisplay 313 displayCtrl 120 menuSetPicture [[0, 1], "\a3\modules_f\data\iconunlock_ca.paa"];
```