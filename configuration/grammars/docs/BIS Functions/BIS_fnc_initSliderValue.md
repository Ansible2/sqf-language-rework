Initialises a slider attribute control within the `Eden Editor`. Can also be used outside of `Eden Editor`.


---
*Syntaxes:*

[ctrlSlider, ctrlEdit, unit, default] call `BIS_fnc_initSliderValue`

---
*Example 1:*

```sqf
[_this controlsGroupCtrl 100, _this controlsGroupCtrl 101, "m", 50] call BIS_fnc_initSliderValue;
```