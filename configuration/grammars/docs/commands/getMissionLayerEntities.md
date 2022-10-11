Returns all entities within the specific `Eden Editor layer` and its sub-layers.
To be used when the scenario is running, not in the editor workspace.
Useful to disable/enable whole parts of the scenario if layers are used during mission design.


---
*Example 1:*
```sqf
private _base = getMissionLayerEntities "Base";
```

*Example 2:*
delete all objects within that layer after the player is over 800m away from _someObject:

```sqf
waitUntil { sleep 1; (player distance _someObject) > 800 };
private _simpleObjects = (getMissionLayerEntities "Simple Objects") select 0;
{
	deleteVehicle _x;
} forEach _simpleObjects;
```

*Example 3:*
```sqf
private _layer1337Entities = getMissionLayerEntities 1337;
```