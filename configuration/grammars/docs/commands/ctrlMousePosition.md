Returns position of the mouse on the screen relative to UI Control in UI coordinates. Also works within `CT_CONTROLS_GROUP`s. In that case, returned position is relative to the position of the group.


---
*Syntaxes:*

`ctrlMousePosition` control

---
*Example 1:*

```sqf
private _mouseRelPos = ctrlMousePosition _ctrl;
```