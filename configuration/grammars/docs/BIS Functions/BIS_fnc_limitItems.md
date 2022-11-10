Keeps or removes unit's items (including NVGs and binocular/designator) based on probability user sets.


---
*Syntaxes:*

[unit,chanceNVG,chanceBino,chanceGPS,chanceMap,chanceRadio,chanceCompass,chanceWatch] call `BIS_fnc_limitItems`

---
*Example 1:*

```sqf
player call BIS_fnc_limitItems;
```

*Example 2:*

```sqf
[player,0,15,30,45,60,75,90] call BIS_fnc_limitItems;
```