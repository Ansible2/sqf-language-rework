Earthquake simulation - now just camera shake and sound. `Arma 3 Stamina|Stamina` is impacted by the earthquake too. Earthquake will last between 13 and 20 seconds. While earthquake is in progress `missionNamespace` variable **BIS_fnc_earthquake_inprogress** will be `true`.


---
*Syntaxes:*

[intensity] spawn `BIS_fnc_earthquake`

---
*Example 1:*

```sqf
[4] spawn BIS_fnc_earthquake;
```