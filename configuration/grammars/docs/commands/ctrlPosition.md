Returns the current position of 2D control as **[x, y, w, h]}} array. For 3D control it returns relative {{hl|[x, y, z]**. If the control is part of a `CT_CONTROLS_GROUP`, the returned position will be relative to the group's position.


---
*Syntaxes:*

`ctrlPosition`  controlName

---
*Example 1:*

```sqf
_pos = ctrlPosition _control;
```