Smart-return number, text or array value from config.<br><br>- Default syntax works for any config.<br>
- Alternative syntax is for comfortable working with mission `description.ext`.


---
*Syntaxes:*

config call `BIS_fnc_getCfgData`

array call `BIS_fnc_getCfgData`

---
*Example 1:*

```sqf
private _value = (configFile >> "BulletBubbles" >> "BulletBubbles1" >> "type") call BIS_fnc_getCfgData;
```

*Example 2:*

```sqf
private _value = (missionConfigFile >> "Hubs" >> "A1" >> "QuickStart" >> "trigger") call BIS_fnc_getCfgData;
```