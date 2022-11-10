Gets a number defined in config and retype it into a boolean. Everything greater than 0 is `true`, otherwise it is `false`.
* Default syntax works for any config
* Alternative syntax is for comfortable working with mission's `Description.ext`.


---
*Syntaxes:*

config call `BIS_fnc_getCfgDataBool`

array call `BIS_fnc_getCfgDataBool`

---
*Example 1:*

```sqf
private _value = (missionConfigFile >> "Characters" >> "Default" >> "equipAdjust") call BIS_fnc_getCfgDataBool;
```

*Example 2:*

```sqf
private _value = ["Characters", "Default", "equipAdjust"] call BIS_fnc_getCfgDataBool;
```