Returns edit control text selection in format [start, length, selectedText].


---
*Syntaxes:*

`ctrlTextSelection` control

---
*Example 1:*

Selection is made from left to right:

```sqf
ctrlTextSelection _control; //[0, 11, "Hello World"];
```

*Example 2:*

Selection is made from right to left:

```sqf
ctrlTextSelection _control; //[11, -11, "Hello World"];
```

*Example 3:*

Find cursor position:

```sqf
ctrlTextSelection _control params ["_start", "_length"];
private _cursorPos = _start + _length;
```