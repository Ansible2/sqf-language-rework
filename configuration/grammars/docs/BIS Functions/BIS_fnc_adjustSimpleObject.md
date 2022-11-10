Adjust simple object vertical position, animations and selection according to provided data.<br>
In case both adjustment data and class are being used, data has higher priority and only undefined parts are filled from config.


---
*Syntaxes:*

[object, [class, model, reversed, verticalOffset, animAdjustments, selectionToHide]] call `BIS_fnc_adjustSimpleObject`

---
*Example 1:*

```sqf
[myCar, ["B_MyCar_F", "path\to\file.p3d"]] call BIS_fnc_adjustSimpleObject;
```