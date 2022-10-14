Selects **length}} characters of edit control from the {{hl|start** position and places cursor at the end of selection.


---
*Syntaxes:*

control `ctrlSetTextSelection` [start, length]

---
*Example 1:*

```sqf
_control ctrlSetTextSelection [5, 10];
```

*Example 2:*

```sqf
disableSerialization;
private _ctrl = findDisplay 46 createDisplay "RscDisplayEmpty" ctrlCreate ["RscEditMulti", -1];
_ctrl ctrlSetPosition [0,0,0.5,0.3];
_ctrl ctrlCommit 0;
_ctrl ctrlSetText "Hello World";
_ctrl ctrlSetTextSelection [6, 5]; // selects World
ctrlSetFocus _ctrl;
```

*Example 3:*

Select text from right to left:

```sqf
_control ctrlSetTextSelection [5, -4];
```