Initialize slider with edit box showing its value supporting small decimal numbers.


---
*Syntaxes:*

[ctrlSlider, ctrlEdit, unit, defaultValue] call `BIS_fnc_OM_Module_initSmallValueSilder`

---
*Example 1:*

```sqf
[_ctrlSlider,_ctrlEdit,"m",500] call BIS_fnc_OM_Module_initSmallValueSilder;//Set default value only.
```

*Example 2:*

```sqf
[_ctrlSlider,_ctrlEdit,"m"] call BIS_fnc_OM_Module_initSmallValueSilder;//Initialize functionality.
```