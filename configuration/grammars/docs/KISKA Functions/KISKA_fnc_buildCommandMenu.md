#### Description:
Creates a showCommandingMenu compatible menu global array to be used with KISKA_fnc_commandMenuTree. This will be saved as a missionNamespace global var.

#### Parameters:
0: **_menuName** : *(STRING)* - The name of the menu global variable

1: **_menuTitle** : *(STRING)* - The title of the menu that will appear when it is openned

2: **_menuParams** : *(ARRAY)* - An array of arrays formatted as:0. *(STRING)* - The name of the menu option1. *(NUMBER)* - The key code for quick menu select (key 1 is code 2, 2 is 3, etc. use 0 for no key)2. *(ANY)* - The value to assign to this menu option

#### Returns:
*(ARRAY)* - The created menu array

#### Examples:
```sqf
_createdMenu = [] call KISKA_fnc_buildCommandMenu
```

