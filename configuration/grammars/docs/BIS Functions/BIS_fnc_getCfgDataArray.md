Gets an array defined in Config. If the value is not an array, it is retyped into one.<br><br>- Default syntax works for any config.<br>
- Alternative syntax is for comfortable working with mission `description.ext`.


---
*Syntaxes:*

config call `BIS_fnc_getCfgDataArray`

array call `BIS_fnc_getCfgDataArray`

---
*Example 1:*

```sqf
private _array = (missionConfigFile >> "Characters" >> "Default" >> "equipAdjust") call BIS_fnc_getCfgDataArray;
```

*Example 2:*

```sqf
private _array = ["Characters","Default","equipAdjust"] call BIS_fnc_getCfgDataArray;
```