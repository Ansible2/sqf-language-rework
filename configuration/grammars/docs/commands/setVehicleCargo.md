Load cargo vehicle inside vehicle if possible, returns bool based on whether the vehicle was able to be loaded.  Can also be used to unload a specific loaded vehicle or all loaded vehicles.


---
*Example 1:*
Blackfish with no vehicle cargo loaded

```sqf
private _success = blackfish setVehicleCargo offroad; // true
```

*Example 2:*
Blackfish with full cargo already loaded

```sqf
private _success = blackfish setVehicleCargo offroad; // false
```

*Example 3:*
Unload specific loaded vehicle (will paradrop if dropped from high altitude)

```sqf
private _success = objNull setVehicleCargo offroad;
```

*Example 4:*
Unload all vehicles (will paradrop if dropped from high altitude)

```sqf
private _success = blackfish setVehicleCargo objNull;
```