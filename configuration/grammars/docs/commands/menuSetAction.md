Sets new action into menu entry on given path.


---
*Syntaxes:*

`menuSetAction` [idc, path, action]

control `menuSetAction` [path, action]

---
*Example 1:*

```sqf
findDisplay 313 displayCtrl 120 menuSetAction [[0, 1], "systemChat 'Hello World!'"];
```