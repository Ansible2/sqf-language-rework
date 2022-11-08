#### Description:
Takes a number (id) and translates it into the class name for that number

#### Parameters:
0: **_id** : *(NUMBER)* - The ammo type ID

#### Returns:
*(STRING)* - ClassName for the corresponding Id number, otherwise empty string

#### Examples:
```sqf
_class = [0] call KISKA_fnc_getAmmoClassFromId
```

