Returns an array of addons (`CfgPatches`) in which the given config class is defined.


---
*Example 1:*
```sqf
_addons = configSourceAddonList (configFile >> "CfgVehicles" >> "Man"); // returns ["A3_Data_F", "A3_Characters_F", "A3_Data_F_Curator", "A3_Air_F_Heli"]
```