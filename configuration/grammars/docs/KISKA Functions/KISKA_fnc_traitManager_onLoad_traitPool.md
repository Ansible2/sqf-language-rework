#### Description:
Begins the loop that syncs across the network and populates the pool list.

#### Parameters:
0: **_display** *(DISPLAY)* - The loaded display of the trait manager

#### Returns:
NOTHING

#### Examples:
```sqf
// called from config
[_display] spawn KISKA_fnc_traitManager_onLoad_traitPool;
```

