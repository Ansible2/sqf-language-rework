Get object `boundingBoxReal` max values and store them with `setVariable` ["BIS_EGSpectator_objectBBD", [maxWidth, maxLength, maxHeight]] for later calls.


---
*Syntaxes:*

[object] call `BIS_fnc_getObjectBBD`

---
*Example 1:*

```sqf
[player] call BIS_fnc_getObjectBBD;
```

*Example 2:*

```sqf
[vehicle player] call BIS_fnc_getObjectBBD;
```