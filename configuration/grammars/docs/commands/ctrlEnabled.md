Returns if a control on the currently active user dialog is enabled. Disabled controls cannot be focused. Read `Arma: GUI Configuration` for more information about user dialogs and controls.


---
*Example 1:*
```sqf
if !(ctrlEnabled 100) then
{
  ctrlEnable [100, true];
};
```

*Example 2:*
```sqf
_enabled = ctrlEnabled _control;
```