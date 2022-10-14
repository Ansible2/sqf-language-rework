Sets shortcut of given menu strip entry.


---
*Syntaxes:*

`menuSetShortcut` [idc, path, shortcut]

control `menuSetShortcut` [path, shortcut]

---
*Example 1:*

```sqf
_ctrlMenuStrip menuSetShortcut [[0,0], 2048 + 0x16]; // ALT + U
```