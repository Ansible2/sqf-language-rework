Sets data into menu entry on given path.


---
*Syntaxes:*

`menuSetData` [idc, path, data]

control `menuSetData` [path, data]

---
*Example 1:*

```sqf
findDisplay 313 displayCtrl 120 menuSetData [[0, 1], "[true, player, 'Hello World!', 1337]"];
```