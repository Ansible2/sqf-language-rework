Returns hierarchy of the given config class. Just like with `inheritsFrom`, only complete config classes are supported.


---
*Syntaxes:*

`configHierarchy` configClass

---
*Example 1:*

```sqf
_hierarchy = configHierarchy (configFile >> "CfgVehicles" >> "Car");
// [bin\config.bin,bin\config.bin/CfgVehicles,bin\config.bin/CfgVehicles/Car]
```