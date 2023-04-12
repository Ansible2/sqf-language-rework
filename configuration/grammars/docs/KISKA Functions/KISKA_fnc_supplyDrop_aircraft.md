#### Description:
Spawns in an aircraft that flies over a DZ to drop off supplies.

#### Parameters:
0: **_dropPosition** : *(ARRAY or OBJECT)* - The position (area) to drop the arsenal  1: **_vehicleClass** : *(STRING)* - The class of the vehicle to drop the arsenal

2: **_crates** : *(ARRAY)* - An array of strings that are the classnames of the crates to drop

3: **_deleteCargo** : *(BOOL)* - Delete all the default cargo inside the crates

4: **_addArsenal** : *(BOOL)* - add an arsenal to all the crates

5: **_flyinHeight** : *(NUMBER)* - The flyInHeight of the drop vehicle

6: **_flyDirection** : *(NUMBER)* - The compass bearing for the aircraft to apporach from (if < 0, it's random)

7: **_flyInRadius** : *(NUMBER)* - How far out the drop vehicle will spawn and then fly in

8: **_lifeTime** : *(NUMBER)* - How long until the arsenal is deleted

9: **_side** : *(SIDE)* - The side of the drop vehicle

#### Returns:
NOTHING

#### Examples:
```sqf
[position player] call KISKA_fnc_supplyDrop_aircraft;
```

