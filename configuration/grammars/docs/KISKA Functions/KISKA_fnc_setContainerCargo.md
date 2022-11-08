#### Description:
Takes a cargo array formatted from KISKA_fnc_getContainerCargo and adds it to another container. Exact ammo counts will be preserved even inside of an item, such as magazines inside of a vest or backpack.

#### Parameters:
0: **_containerToLoad** *(OBJECT)* - The container to add the cargo to.

1: **_cargo** *(ARRAY or OBJECT)* - An array of various items, magazines, and weapons formatted from 
KISKA_fnc_getContainerCargo or the object to copy from

#### Returns:
*(BOOL)* - True if cargo was set

#### Examples:
```sqf
[container,otherContainer] call KISKA_fnc_setContainerCargo;
```
```sqf
private _cargoToCopy = [otherContainer] call KISKA_fnc_getContainerCargo;
[container,_cargoToCopy] call KISKA_fnc_setContainerCargo;
```

