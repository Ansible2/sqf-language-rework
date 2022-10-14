Checks if config entry represents a text value.


---
*Syntaxes:*

`isText`  config

---
*Example 1:*

```sqf
_isText = isText (configFile >> "CfgVehicles") // false
```

*Example 2:*

```sqf
_isText = isText (configFile >> "CfgVehicles" >> "B_MRAP_01_F" >> "displayName") // true
```