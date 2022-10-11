Adds a backpack for a unit. If a unit already has a backpack, the old backpack will be placed on the ground under the unit. Items defined in the backpack's config will be added as well.
{{Feature | Informative |
Classname list of available backpacks:
* [[Arma 2 OA: Backpacks|Arma 2 OA backpacks]]
* [[Arma 3 CfgVehicles EMPTY|Arma 3 backpacks]] - objects starting with "B_", starts with "`B_AssaultPack_khk`"


---
*Example 1:*
```sqf
this addBackpack "TK_RPG_Backpack_EP1";
```

*Example 2:*
```sqf
_mySoldierDude addBackpack "US_Patrol_Pack_EP1";
```

*Example 3:*
```sqf
_mySoldierDude addBackpack "B_AssaultPack_mcamo_Ammo";// Adds backpack prefilled with items defined in its config
```