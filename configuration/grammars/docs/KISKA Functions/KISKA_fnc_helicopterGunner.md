#### Description:
Spawns a helicopter (or uses an existing one) to partol a given area for a period of time and engage enemy targets in a given area.

#### Parameters:
0: **_centerPosition** : *(Position[], OBJECT)* - The position around which the helicopter will patrol

1: **_radius** : *(NUMBER)* - The size of the radius to patrol around

2: **_aircraftType** : *(STRING or OBJECT)* - The class of the helicopter to spawnIf object, it is expected that this is a helicopter with crew

3: **_timeOnStation** : *(NUMBER)* - How long will the aircraft be supporting

4: **_supportSpeedLimit** : *(NUMBER)* - The max speed the aircraft can fly while in the support radius

5: **_flyinHeight** : *(NUMBER)* - The altittude the aircraft flys at

6: **_approachBearing** : *(NUMBER)* - The bearing from which the aircraft will approach from (if below 0, it will be random)This has no effect if an object is used for _aircraftType

7: **_side** : *(SIDE)* - The side of the created helicopter

8: **_postSupportCode** : *(CODE, ARRAY, or STRING)* - Code to execute after the support completes.
    See KISKA_fnc_callBack.
    The default behaviour is for the aircraft to move 2000 meters away and for
     its complete crew and self to be deleted. The _postSupportCode should return a `BOOL`
     that if `false` will NOT perform the default behaviour in addition to the callback.Parameters:- 0: *(OBJECT)* - The helicopter confucting support- 1: *(GROUP)* - The group the pilot belongs to- 2: *(OBJECT[])* - The full vehicle crew- 3: *(OBJECT)* - The unit that *should* be the pilot of the helicopter- 4: *(ARRAY)* - The position the helicopter was supporting

#### Returns:
ARRAY - The vehicle info
    0: *(OBJECT)* - The vehicle created
    1: *(OBJECT[])* - The vehicle crew
    2: *(GROUP)* - The group the crew is a part of

#### Examples:
```sqf
[
    player,
    250,
    "B_Heli_Attack_01_dynamicLoadout_F"
] call KISKA_fnc_helicopterGunner;
```

