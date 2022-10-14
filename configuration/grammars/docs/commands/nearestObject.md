Returns the nearest object of given type (or inherited classes) to given position within a sphere. Hardcoded radius is 50 meters. Unlike with `nearestObjects`, where distance is measured in 2D space, `nearestObject` will be closest object in 3D space.


---
*Syntaxes:*

`nearestObject` [position, type]

`nearestObject` position

position `nearestObject` typeOrId

position `nearestObject` id

---
*Example 1:*

```sqf
_nObject = nearestObject [2345, 6789];
_nObject = nearestObject [player, "StreetLamp"];
```

*Example 2:*

Return the object with ID 123456:

```sqf
_nObject = [0,0,0] nearestObject 123456;
```

*Example 3:*

```sqf
_nObject = getPos player nearestObject "StreetLamp";
```

*Example 4:*

Return the nearest object with (`typeOf` _nObject == "#XXXX") -> #mark, #slop, etc. Unlimited search range:

```sqf
_nObject = _position nearestObject -1;
```

Return the nearest object with (`typeOf` _nObject != ""). Search range is 50m:

```sqf
_nObject = nearestObject _position;
```

*Example 5:*

(See also `allMissionObjects`):

```sqf
_blood	= nearestObject [player, "#slop"];
_step	= nearestObject [player, "#mark"];
_track	= nearestObject [player, "#track"];
_crater	= nearestObject [player, "#crater"];
```