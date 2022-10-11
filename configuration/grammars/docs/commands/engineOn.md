Activates and deactivates the engine of a vehicle.


---
*Example 1:*
```sqf
if (!isEngineOn _jeep) then { _jeep engineOn true; };
```

*Example 2:*
```sqf
waitUntil { player == driver _jeep; };
vehicle player engineOn true;
```