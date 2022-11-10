Creates or registers location logics (used in various modules, like `Ambient Civilians`, `Ambient Civilian Vehicles` or Warfare 2).

Upon registering, function will set following variables into location logic's variable space:
* "class" - unique class of location (either **BIS_loc_<configname>}} or {{hl|BIS_loc_custom_<ID>**)
* "name" - name of location from config or `setName` command. If none is defined, class is used
* "type" - config type
* "neighbors" - config defined neighbor locations

If you are registering currently existing object and some of variables above is already stored in it, it will `not` be replaced.


---
*Syntaxes:*

[types, area, debug] call `BIS_fnc_locations`

[objects] call `BIS_fnc_locations`

---
*Example 1:*

```sqf
["CityCenter", [getPosATL player, 1000]] call BIS_fnc_locations;
```

*Example 2:*

```sqf
`"acityc_dolina"` call BIS_fnc_locations;
```

*Example 3:*

```sqf
[[myLocation1, myLocation2], [], true] call BIS_fnc_locations;
```