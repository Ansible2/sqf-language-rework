#### Description:
Takes a number (id) and translates it into the title name for that number. Used to fill out menus with a consistent string for the corresponding round type.

#### Parameters:
0: **_id** : *(NUMBER)* - The ammo type ID

#### Returns:
*(STRING)* - ClassName for the corresponding Id number, otherwise empty string

#### Examples:
```sqf
_title = [0] call KISKA_fnc_getAmmoClassFromId
```

