Handling EH-based helicopter damage, event handler in question being *(Reference sic "`Arma 3: Event Handlers#Dammaged|Da`mm`aged`")*.


---
*Syntaxes:*

[helicopter, selection, damage] call `BIS_fnc_helicopterDamage`

---
*Example 1:*

```sqf
myHelicopter addEventHandler ["Dammaged", { _this call BIS_fnc_helicopterDamage; }];
```