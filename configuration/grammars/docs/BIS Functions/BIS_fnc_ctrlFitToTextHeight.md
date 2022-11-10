Resize structured text control to fit its text height.


---
*Syntaxes:*

[control,offset,time] call `BIS_fnc_ctrlFitToTextHeight`

---
*Example 1:*

```sqf
private _height = [_ctrl, 1.5, 3] call BIS_fnc_ctrlFitToTextHeight;
```