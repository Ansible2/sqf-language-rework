Finds the nearest enemy to the specified position. Returns a null object if the object's group does not `know about` any enemies. This command will return nearest object that is known to the unit and is considered enemy. An empty vehicle that is part of enemy group assets (see `addVehicle`) can be returned as valid nearest target.


---
*Example 1:*
```sqf
_myNearestEnemy = (units _myGroup select 0) findNearestEnemy player;
```

*Example 2:*
```sqf
_myNearestEnemy = player findNearestEnemy player;
```