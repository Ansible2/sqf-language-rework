Sets the current state of a `CT_CHECKBOX` control. Use **"CheckedChanged"** control event handler with it.


---
*Syntaxes:*

control `cbSetChecked` state

---
*Example 1:*

```sqf
_myCheckBox cbSetChecked true;
```

*Example 2:*

```sqf
_disp = findDisplay 46 createDisplay "RscDisplayEmpty";
_chk = _disp ctrlCreate ["RscCheckBox", -1];
_chk cbSetChecked true;
```