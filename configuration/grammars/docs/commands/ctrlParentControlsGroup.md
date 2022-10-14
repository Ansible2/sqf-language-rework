Returns the parent control of a given child control. If the control is not part of a `CT_CONTROLS_GROUP` control then `controlNull` is returned. To return parent `Display` of the control use `ctrlParent`.


---
*Syntaxes:*

`ctrlParentControlsGroup` ctrl

---
*Example 1:*

```sqf
_ctrlCombo = _ctrl controlsGroupCtrl 100; // control
ctrlParentControlsGroup _ctrlCombo; // parent control group (_ctrl)
```