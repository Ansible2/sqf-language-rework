Returns an array of locations of chosen type(s) within the given radius of the given position, sorted from nearest to farthest.


---
*Example 1:*
```sqf
_nearbyLocations = nearestLocations [position player, ["RockArea", "VegetationFir"], 100];
```

*Example 2:*
Find any of nearest locations:

```sqf
private _allLocationTypes = [];
"_allLocationTypes pushBack configName _x" configClasses (configFile >> "CfgLocationTypes");
{
	systemChat format [
		"%1 (%2) - %3m", 
		_x, 
		text _x, 
		position player distance _x
	];
} forEach nearestLocations [player, _allLocationTypes, 500];
```