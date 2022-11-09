Returns the provided control's style. See *(Reference HashLink "Arma: GUI Configuration#Control Styles")*.


---
*Syntaxes:*

`ctrlStyle` control

---
*Example 1:*

```sqf
private _ctrlStyle = ctrlStyle _myControl;

private _bitFlags = _ctrlStyle call BIS_fnc_bitflagsToArray;
if (2 in _bitFlags) then
{
	hint "This control has centered text!";
};
```