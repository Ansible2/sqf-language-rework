Returns string data from item on given path. IDC means id of parent `CT_TREE`.


---
*Syntaxes:*

`tvData` [idc, path]

control `tvData` path

---
*Example 1:*

```sqf
tvData [101, [0]];
```

*Example 2:*

```sqf
(_display displayCtrl 101) tvData [0];
```