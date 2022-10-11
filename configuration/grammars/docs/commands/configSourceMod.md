Returns modDir of the mod that given config class was loaded from.


---
*Example 1:*
```sqf
configSourceMod (configFile >> "CfgVehicles" >> "Heli_Transport_04_base_F"); // returns "heli"
```

*Example 2:*
```sqf
configSourceMod (configFile >> "CfgVehicles" >> "Car"); // returns "A3"
```