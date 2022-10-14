Despite a misleading name, returns the vehicle that is transporting given vehicle in cargo. If the given vehicle is not in vehicle cargo, `objNull` is returned.


---
*Syntaxes:*

`isVehicleCargo` cargo

---
*Example 1:*

Blackfish with given variable name blackfish, with a vehicle inside called quad

```sqf
_transportingVehicle = isVehicleCargo quad; //returns blackfish
```

*Example 2:*

Vehicle called quad that is not being transported as cargo

```sqf
_transportingVehicle = isVehicleCargo quad; //returns objNull
```