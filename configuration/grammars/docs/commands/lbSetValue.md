Sets the additional value in the row with the given index of a `CT_LISTBOX` or `CT_COMBO` control.


---
*Syntaxes:*

`lbSetValue`  [idc, index, value]

control `lbSetValue`  [index, value]

---
*Example 1:*

```sqf
lbSetValue [101, 0, 1];
```

*Example 2:*

```sqf
_control lbSetValue [0, 1];
```