Scale a control while maintaining its centering.


---
*Syntaxes:*

[control,scale,time] spawn `BIS_fnc_ctrlSetScale`

---
*Example 1:*

```sqf
private _finalPos = [_ctrl, 1.5, 3] spawn BIS_fnc_ctrlSetScale;
```