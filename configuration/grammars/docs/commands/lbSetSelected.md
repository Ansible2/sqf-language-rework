Sets the selection state of the given row of the given listbox of style LB_MULTI.
The command has to be called for every row which is needed to be selected in multi-selection listbox. Use negative index -1 to select/deselect all rows (since <See GVI Reference 12>).
For single selection listbox use `lbSetCurSel` instead.


---
*Syntaxes:*

control `lbSetSelected` [index, selected, forceEH]

---
*Example 1:*

```sqf
_control lbSetSelected [0, true];
```