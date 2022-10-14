Sorts given multicolumn listbox by `lnbValue` in given column in ascending or descending order.


---
*Syntaxes:*

`lnbSortByValue` [idc, column, reversed]

control `lnbSortByValue` [column, reversed]

---
*Example 1:*

```sqf
lnbSortByValue [1800, 1, false];
```

*Example 2:*

```sqf
_ctl lnbSortByValue [1, true];
```