Adds new submenu entry into item on given path.


---
*Syntaxes:*

`menuAdd` [idc, path, text]

control `menuAdd` [path, text]

---
*Example 1:*

```sqf
findDisplay 313 displayCtrl 120 menuAdd [[], "Custom Tools"]; // Add new entry at the top level to the menu strip in Eden Editor
```