Set mass relative to the default vehicle mass (default mass being vehicle mass on first execution of this function).


---
*Syntaxes:*

[vehicle, animationInformation, massDifference] call `BIS_fnc_setVehicleMass`

---
*Example 1:*

```sqf
// default behaviour, change the mass according to the current phase of the animation sources
result = [this]			call BIS_fnc_setVehicleMass;
result = [this, [], 0]	call BIS_fnc_setVehicleMass;
```

*Example 2:*

```sqf
// doesn't care about the current phase of animations, it will change the mass for the given sources
result = [this, ["source1", 1, "source2", 0]] call BIS_fnc_initVehicle;
```

*Example 3:*

```sqf
// will do the same as the first example, then subtract 150 to the mass
result = [this, [], -150] call BIS_fnc_initVehicle;
```