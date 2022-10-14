Takes array of row indices as a parameter and removes rows with those indices. Indices of remaining rows will be recomputed.


---
*Syntaxes:*

ctrl `ctRemoveRows` [index1, index2, ...]

---
*Example 1:*

```sqf
_control ctRemoveRows [0, 1, 2];
```