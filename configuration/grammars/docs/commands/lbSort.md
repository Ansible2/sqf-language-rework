Sorts listbox entries alphabetically ascending by their `lbText`.


---
*Syntaxes:*

`lbSort` control

`lbSort` [control, sortOrder]

`lbSort` idc

`lbSort` [idc, sortOrder]

---
*Example 1:*

```sqf
lbSort _myControl;
```

*Example 2:*

```sqf
lbSort [_myControl, "DESC"];
```

*Example 3:*

```sqf
lbSort 101;
```

*Example 4:*

```sqf
lbSort [101, "DESC"];
```