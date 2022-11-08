#### Description:
Fires a number of rounds from artillery piece at target with random disperstion values

#### Parameters:
0: **_gun** : *(OBJECT)* - The artillery piece

1: **_target** : *(OBJECT or ARRAY)* - Self Expllanitory

2: **_rounds** : *(NUMBER)* - Number of rounds to fire

3: **_randomDistance** : *(NUMBER)* - max distance error margin (0 will be directly on target for all rounds)

4: **_randomDirection** : *(NUMBER)* - 360 direction within rounds can land

5: **_fireTime** : *(ARRAY)* - Array of random time between shots for bell curve

#### Returns:
Nothing

#### Examples:
```sqf
[vehicle, target, 2, 100, 360, [9,10,11]] spawn KISKA_fnc_arty;
```

