#### Description:
Saves the cargo of a container in a formatterd array to be used with KISKA_fnc_pasteContainerCargo for copying cargos of containers. Exact ammo counts will be preserved even inside of an item such as magazines inside of a vest or backpack.

#### Parameters:
0: **_primaryContainer** *(OBJECT)* - The container to save the cargo of

#### Returns:
*(ARRAY)* - Formatted array of all items in cargo space of a container.
Used with KISKA_fnc_setContainerCargo.
Will return [] if no cargo is present.

#### Examples:
```sqf
[container] call KISKA_fnc_getContainerCargo;
```

