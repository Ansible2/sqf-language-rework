#### Description:
Due to the local nature of many light commands, this function is used to sync up the brightness increase of the flares launched in the support function.

#### Parameters:
0: **_light** *(OBJECT)* - The #lightPoint attached to the flare

1: **_flare** *(OBJECT)* - The flare object

#### Returns:
NOTHING

#### Examples:
```sqf
[_light,_flare] remoteExecCall ["KISKA_fnc_updateFlareEffects",0,_flare];
```

