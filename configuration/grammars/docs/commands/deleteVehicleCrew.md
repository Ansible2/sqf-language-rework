Deletes a member of or the whole crew of a vehicle. Human players cannot be deleted.


---
*Example 1:*
```sqf
_helicopter deleteVehicleCrew driver _helicopter;
```

*Example 2:*
Delete entire crew:

```sqf
deleteVehicleCrew _tank; // since v2.06

{ _helicopter deleteVehicleCrew _x } forEach crew _helicopter; // before v2.06
```