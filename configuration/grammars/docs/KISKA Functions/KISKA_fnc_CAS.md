#### Description:
Completes either a gun run, bomb run, rockets, or rocket and gun strike.

#### Parameters:
0: **_attackPosition** : *(OBJECT or ARRAY)* - ASL position or object to attack

1: **_attackTypeID** : *(NUMBER or ARRAY)* - See CAS Type IDs.hpp .
If an array, format needs to be [attackTypeId,pylonMagazineClass].
Custom mag classes, when used for napalm or UGB ids, will drop the ENTIRE payload
 of that mag. e.g. mag class "vn_bomb_f4_out_500_blu1b_fb_mag_x1" is 1 bomb dropped,
 "vn_bomb_f4_out_500_blu1b_fb_mag_x4" will be 4 dropped

2: **_attackDirection** : *(NUMBER)* - The direction the aircraft should approach from relative to North

3: **_planeClass** : *(STRING)* - The className of the aircraft

4: **_side** : *(SIDE)* - The side of the plane

5: **_spawnHeight** : *(NUMBER)* - At what height should the aircraft start firing

6: **_spawnDistance** : *(NUMBER)* - How far away to spawn the aircraft

7: **_breakOffDistance** : *(NUMBER)* - The distance to target at which the aircraft should definately disengage and fly away (to not crash)

8: **_attackPositionOffset** : *(NUMBER)* - This will offset the _attackPosition in meters and in the direction of the attack.
    So for instance, if I wanted a gun run to be aimed 20m further in the _attackDirection from the _attackPosition, I'd
     set this to 20

9: **_attackDistance** : *(NUMBER)* - The distance to target at which the aircraft can start completeing its attack
10: **_allowDamage** : *(BOOL)* - Allow damage of both the crew and aircraft

#### Returns:
NOTHING

#### Examples:
```sqf
[myTarget] spawn KISKA_fnc_CAS;
```

