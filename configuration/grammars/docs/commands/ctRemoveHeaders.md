Takes array of header indices as a parameter and removes headers with those indices. Indices of remaining headers will be recomputed.


---
*Syntaxes:*

ctrl `ctRemoveHeaders` indices

---
*Example 1:*

```sqf
_control ctRemoveHeaders [0, 1, 2];
```