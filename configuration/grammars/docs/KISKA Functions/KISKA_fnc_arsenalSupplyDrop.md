#### Description:
Spawns in an aircraft that flies over a DZ to drop off an arsenal.

#### Parameters:
0: **_dropPosition** : *(ARRAY)* - The position (area) to drop the arsenal
  1: **_vehicleClass** : *(STRING)* - The class of the vehicle to drop the arsenal

2: **_dropAlt** : *(NUMBER)* - The flyInHeight of the drop vehicle

3: **_flyDirection** : *(NUMBER)* - The compass bearing for the aircraft to apporach from (if < 0, it's random)

4: **_flyInRadius** : *(NUMBER)* - How far out the drop vehicle will spawn and then fly in

5: **_lifeTime** : *(NUMBER)* - How long until the arsenal is deleted

6: **_side** : *(SIDE)* - The side of the drop vehicle

#### Returns:
NOTHING

#### Examples:
```sqf
[position player] call KISKA_fnc_arsenalSupplyDrop;
```

