Returns name of picture from item pointed to by path. IDC means id of parent Tree View.


---
*Syntaxes:*

`tvPicture` [idc, path]

ctrl `tvPicture` path

---
*Example 1:*

```sqf
tvPicture [101, [0]];
```

*Example 2:*

```sqf
_ctrl tvPicture [0,0,0];
```