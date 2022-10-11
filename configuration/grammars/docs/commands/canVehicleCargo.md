Returns bool array if it is possible to load cargo inside vehicle and if possible to load cargo into empty vehicle


---
*Example 1:*
Blackfish with no vehicle cargo loaded

```sqf
private _result = blackfish canVehicleCargo offroad; // [true, true]
```

*Example 2:*
Blackfish with one vehicle cargo called offroad already loaded

```sqf
private _result = blackfish canVehicleCargo offroad; // [false, false]
```
Even if the Blackfish were empty, the offroad could not be loaded because it is already in a cargo space

*Example 3:*
Blackfish with one vehicle cargo called offroad already loaded

```sqf
private _result = blackfish canVehicleCargo offroad2; // [false, true]
```
offroad2 can't be loaded because there isn't enough space in the Blackfish, but if there were space offroad2 could be loaded into the Blackfish