Function behind the `Secondary Operations Manager` module.


---
*Syntaxes:*

[secops, unit] call `BIS_SOM_addSupportRequestFunc`

---
*Example 1:*

```sqf
[["transport", "aerial_reconnaissance", "supply_drop", "tactical_airstrike", "artillery_barrage", "gunship_run"], player] call BIS_SOM_addSupportRequestFunc;
```