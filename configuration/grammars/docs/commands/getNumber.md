Extract number from config entry.


---
*Syntaxes:*

`getNumber` config

---
*Example 1:*

```sqf
_value = getNumber (configFile >> "CfgVehicles" >> "Thing" >> "maxSpeed");
```