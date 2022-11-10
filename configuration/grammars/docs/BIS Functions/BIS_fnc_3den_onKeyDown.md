Used internally by the `Arma 3 Key Frame Animation` system. Called when a button is pressed.


---
*Syntaxes:*

[display, button, shift, ctrl, alt] call `BIS_fnc_3den_onKeyDown`

---
*Example 1:*

```sqf
findDisplay 313 displayAddEventHandler ["keyDown", { _this call BIS_fnc_3den_onKeyDown }];
```