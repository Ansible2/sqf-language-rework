Returns shortcut related to menu entry on given path in form of a bitflag. To get the shortcut text use `menuShortcutText`.


---
*Syntaxes:*

`menuShortcut` [idc, path]

control `menuShortcut` path

---
*Example 1:*

```sqf
findDisplay 313 displayCtrl 120 menuShortcut [0, 1];
```