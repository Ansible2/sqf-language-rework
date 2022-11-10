Load a script parameter. See `Arma 3: Functions Library#Loading Parameters|Arma 3: Functions Library` for detailed description.


---
*Syntaxes:*

[input, index, defaultValue, dataTypes, requiredCount] call `BIS_fnc_param`

---
*Example 1:*

```sqf
_target = [_this, 0, objNull, [objNull,[]], [2,3]] call BIS_fnc_param;
```
* if (_this select 0) is not defined, default objnull is used.
* if (_this select 0) is defined, but is neither of type `Object` nor `Array`, error message is logged and default `objNull` is used.
* if (_this select 0) and is `Array`, but it is count is neither 2 nor 3, error message is logged and default `objNull` is used.

*Example 2:*

```sqf
_answer = [_this, 1, 42] call BIS_fnc_param;
```
* if (_this select 1) is not defined, default 42 is used.
* no limit for data types or number of elements exists.