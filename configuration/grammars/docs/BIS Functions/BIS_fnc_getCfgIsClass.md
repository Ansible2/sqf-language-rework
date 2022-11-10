Return true if it is a class. Can by called in two ways:
* first way (general) works for any config
* second way is for comfortable working with mission description.ext


---
*Syntaxes:*

configEntry call `BIS_fnc_getCfgIsClass`

classNames call `BIS_fnc_getCfgIsClass`

---
*Example 1:*

```sqf
private _isClass = (missionConfigFile >> "Hubs" >> "A1" >> "QuickStart") call BIS_fnc_getCfgIsClass;
```

*Example 2:*

```sqf
private _isClass = ["Hubs"] call BIS_fnc_getCfgIsClass;
```