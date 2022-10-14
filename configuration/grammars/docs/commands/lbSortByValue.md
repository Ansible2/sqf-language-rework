Sorts the ListBox entries by `lbValue`. The entries are sorted in ascending order. Also note that this command will mix up the entries randomly if multiple entries have the same value. In <See arm Reference 3> use `lbSortBy` to avoid this problem.


---
*Syntaxes:*

`lbSortByValue`  control

`lbSortByValue`  idc

---
*Example 1:*

```sqf
lbSortByValue _control;
```

*Example 2:*

```sqf
lbSortByValue 101;
```