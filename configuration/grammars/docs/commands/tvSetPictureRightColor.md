Sets color of the right picture on the tree view item defined by path


---
*Syntaxes:*

`tvSetPictureRightColor` [idc, path, color]

control `tvSetPictureRightColor` [path, color]

---
*Example 1:*

```sqf
tvSetPictureRightColor [101, [0], [1,0,1,1]];
```

*Example 2:*

```sqf
_ctrl tvSetPictureRightColor [[0], [1,0,1,1]];
```