Returns the provided control's style. See <See HashLink Reference Control Styles>.


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