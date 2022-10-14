Sets the colour of the picture (set via `tvSetPicture`) under the specified tree view path.


---
*Syntaxes:*

`tvSetPictureColor` [idc, path, color]

ctrl `tvSetPictureColor` [path, color]

---
*Example 1:*

```sqf
tvSetPictureColor [101, [0,2], [1,0,1,1]];
```

*Example 2:*

```sqf
_tree tvSetPictureColor [[0,2], [1,0,1,1]];
```