Returns the additional integer value of the item with the given index of the `CT_LISTBOX` or `CT_COMBO`.


---
*Syntaxes:*

`lbValue`  [idc, index]

control `lbValue`  index

---
*Example 1:*

```sqf
_value = lbValue [101, 0];
```

*Example 2:*

```sqf
_value = _control lbValue 0;
```