Enables or disables a control of the currently active user dialog.
Disabled controls cannot be clicked onto.
Read `Arma: GUI Configuration` for more information about user dialogs and controls.


---
*Syntaxes:*

`ctrlEnable`  [idc, enable]

controlName `ctrlEnable` enable

---
*Example 1:*

```sqf
ctrlEnable [100, false];
```

*Example 2:*

```sqf
_ctrl ctrlEnable false;
```