#### Description:
Creates an array to be used with showCommandingMenu. Specifically, this is to provide class names to the command menu and then allow a player to select a class from the menu such as when requesting CAS.

#### Parameters:
0: **_classes** : *(ARRAY)* - The class names to add to the list (in the order to appear)

#### Returns:
*(ARRAY)* - The created array

#### Examples:
```sqf
_menuArray = [
["B_Heli_Transport_01_F","B_Heli_Attack_01_dynamicLoadout_F"]
] call KISKA_fnc_createClassSelectMenu;
```

