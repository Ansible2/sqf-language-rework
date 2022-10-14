Returns the current state of given `CT_CHECKBOXES` control. Since Arma 3 v1.72 it is possible to query multiple checkboxes by providing checkbox index. For more information see `CT_CHECKBOXES`.


---
*Syntaxes:*

`ctrlChecked` control

control `ctrlChecked`  index

---
*Example 1:*

```sqf
ctrlChecked _control;
```

*Example 2:*

```sqf
_control ctrlChecked 3;
```