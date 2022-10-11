Deletes an object. Only objects inserted in the mission editor and objects created during the game's progress can be deleted by this command. Terrain objects and players cannot be deleted.


---
*Example 1:*
```sqf
deleteVehicle _house1;
```

*Example 2:*
Deleting a vehicle with crew:

```sqf
// might want to make sure that the car is local
{ car deleteVehicleCrew _x } forEach crew car;
deleteVehicle car;
```