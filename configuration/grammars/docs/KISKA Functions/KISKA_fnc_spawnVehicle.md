#### Description:
A slightly altered/optimized version of BIS_fnc_spawnVehicle. Has support for CUP aircraft to spawn at velocity.

#### Parameters:
0: **_spawnPosition** *(ARRAY or OBJECT)* - 3D array in the format of PositionATL
(PositionAGL if boat or amphibious). Objects can be used, however, this

1: **_spawnDirection** *(NUMBER)* - The direction the vehicle is facing when created (relative to north)
if _spawnPosition is an object and _spawnDirection == -1, _spawnDirection will be set to the
direction of the _spawnPosition object

2: **_vehicleClass** *(STRING)* - The typeOf vehicle to spawn
3. _group *(SIDE or GROUP)* - Either the side to create a group on or an
already existing group to add the units to
4. _forcePosition *(BOOL)* - Force vehicle to spawn at exact coordinates
Does nothing when _spawnPosition is an object
5. _crewInstructions *(ARRAY)* - An array of classnames of unit types and/or man objects
for the crew. Units are moved into the vehicle using moveInAny in the order provided
6. _deleteOverflow *(BOOL)* - Delete any units from _crewInstructions that prexisted if they don't fit in the vehicle

#### Returns:
<ARRAY> -
		0: <OBJECT> - The created vehicle
		1: <ARRAY> - The vehicle crew (if soldier type, it will be the same as created vehicle)
		2: <GROUP> -  The group the crew is a part of

#### Examples:
```sqf
[player,0,"someclass"] call KISKA_fnc_spawnVehicle;
```

