See `BIS_fnc_param`.
Overloading default values is disabled in this variant.
It's intended to be used where `_this` is not used as an input param.


---
*Syntaxes:*

See `BIS_fnc_param`

---
*Example 1:*

```sqf
private _array = [_this, 0, [], ``] call BIS_fnc_param;
_item = [_array,0,true,[true]] call BIS_fnc_paramIn;
```