Returns display's focused control.


---
*Syntaxes:*

`focusedCtrl` display

---
*Example 1:*

```sqf
private _focusedCtrl = focusedCtrl findDisplay 12;
```

*Example 2:*

```sqf
private _isFocused = focusedCtrl _display == _ctrl;
```

*Example 3:*

```sqf
private _isFocused = focusedCtrl (ctrlParent _ctrl) == _ctrl;
```