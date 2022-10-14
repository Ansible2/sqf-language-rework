Searches for an empty position around specified position. The search starts looking for an empty position at a minimum distance of [radius] from the [center] and looks as far away as [radius + maxDistance].
This command ignores moving objects present within the search area. The search area can be preloaded with `findEmptyPositionReady` command.


---
*Syntaxes:*

center `findEmptyPosition` [radius, maxDistance, vehicleType]

---
*Example 1:*

```sqf
_position = (getPosATL player) findEmptyPosition [0,100];
```

*Example 2:*

```sqf
_position = _center findEmptyPosition [10,100,"UH60M_EP1"];
```

*Example 3:*

Check if exact position is empty:

```sqf
_position = _center findEmptyPosition [0, 0, "B_Boat_Armed_01_minigun_F"];
```