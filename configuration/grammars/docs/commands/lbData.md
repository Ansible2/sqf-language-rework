Returns the data set in given index of the `CT_LISTBOX` or `CT_COMBO`.


---
*Syntaxes:*

`lbData`  [idc, index]

control `lbData`  index

---
*Example 1:*

```sqf
_data = lbData [101, 0];
```

*Example 2:*

```sqf
_data = _control lbData 0;
```