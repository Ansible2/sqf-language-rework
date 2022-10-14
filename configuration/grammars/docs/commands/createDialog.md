Creates a dialog which is defined either in the mission's `description.ext`, in the campaign's description.ext or in the global `resource.cpp`. The given name has to be the class name used in one of these files. If another dialog is already opened, the desired dialog is created as a child dialog of the one already opened.


---
*Syntaxes:*

`createDialog`  dialogName

`createDialog` [dialogName, forceOnTop]

---
*Example 1:*

```sqf
_ok = createDialog "RscDisplayGame";
if (!_ok) then {hint "Dialog couldn't be opened!"};
```