Extract array from config entry.


---
*Syntaxes:*

`getArray` config

---
*Example 1:*

```sqf
_array = getArray (configFile >> "CfgVehicles" >> "Thing" >> "threat");
```