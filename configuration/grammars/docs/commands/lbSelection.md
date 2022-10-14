Returns `Array` of selected rows indices in the given listbox. If listbox is of style LB_MULTI (multi-selection) the array will contain multiple elements, otherwise only a single element. For single selection listbox one can also use `lbCurSel`. See also `lbIsSelected`, `lbSetSelected`


---
*Syntaxes:*

`lbSelection` control

---
*Example 1:*

```sqf
_indices = lbSelection _control;
```