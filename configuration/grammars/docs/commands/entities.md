Returns a list of all alive and dead entities of the given type or deriving from the given type. Units in vehicles are ignored with the primary syntax.


---
*Example 1:*
```sqf
_allcars = entities "Car";
```

*Example 2:*
Return all alive entities on the map:

```sqf
_allalive = entities [[], [], true, true];
```

*Example 3:*
Return dead and alive entities but logic:

```sqf
_notlogic = entities [[], ["Logic"], true];
```

*Example 4:*
Return all alive `west` soldiers on foot:

```sqf
_footsoldiers = entities [["SoldierWB"], [], false, true];
```