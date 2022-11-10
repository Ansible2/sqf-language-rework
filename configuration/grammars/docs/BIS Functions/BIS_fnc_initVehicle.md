This function changes the textures, animation sources and/or mass of a given vehicle.<br>
Unless explicitly mentioned , the function will restore the initial state of every animation sources of the given object (see *(Reference Link "#Example 3")*).


---
*Syntaxes:*

[vehicle, variant, animations, mass] call `BIS_fnc_initVehicle`

---
*Example 1:*

```sqf
result = [this, "", []] call BIS_fnc_initVehicle;
```

*Example 2:*

```sqf
result = [this, ["MyTextureSource1", 0.5, "MyTextureSource2", 0.6], []] call BIS_fnc_initVehicle;
```

*Example 3:*

```sqf
result = [this, nil, ["MyAnimationSource1", 0.5, "MyAnimationSource2", 0.7]] call BIS_fnc_initVehicle;
```

*Example 4:*

```sqf
// randomise camo net options with 50% probability
[vehicle player, false, ["showcamonethull", 0.5, "showcamonetturret", 0.5, "showcamonetcannon", 0.5, "showslathull", 0.5]] call BIS_fnc_initVehicle;
```

*Example 5:*

```sqf
// force show all camo net options. Use animationNames to get all available animation sources. Vehicles that don't support certain animations are simply ignored.
[vehicle player, false, ["showcamonethull", 1, "showcamonetturret", 1, "showcamonetcannon", 1, "showslathull", 1]] call BIS_fnc_initVehicle;
```