Sets the tooltip text associated with the specified tree view path.


---
*Syntaxes:*

`tvSetTooltip` [idc, path, text]

ctrl `tvSetTooltip` [path, text]

---
*Example 1:*

```sqf
tvSetTooltip [101, [0,2], "This is a tooltip"];
```

*Example 2:*

```sqf
_tree tvSetTooltip [[0,2], "This is a tooltip"];
```