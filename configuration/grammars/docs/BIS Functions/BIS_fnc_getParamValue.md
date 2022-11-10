Returns the value of mission param given by the class name. This function is global and will return selected param value on any PC including JIP. For backward compatibility it also supports "param1" and "param2".


---
*Syntaxes:*

paramClass call `BIS_fnc_getParamValue`

[paramClass, defaultValue] call `BIS_fnc_getParamValue`

---
*Example 1:*

```sqf
private _viewDistance = "ViewDistance" call BIS_fnc_getParamValue;
```

*Example 2:*

```sqf
private _viewDistance = ["ViewDistance", 2] call BIS_fnc_getParamValue;
```