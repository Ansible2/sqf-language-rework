Returns a list of nearest terrain objects of the given types to the given position or object, within the specified distance. If more than one object is found they will be ordered according to 3D distance to the object (i.e. the closest one will be first in the array). 
In contrast to `nearestObjects` this command returns terrain placed objects like trees, rocks and buildings which don't necessarily need an associated config class.<br><br>
Possible type names:
{{Columns|7|
* **"BUILDING"**
* **"BUNKER"**
* **"BUSH"**
* **"BUSSTOP"**
* **"CHAPEL"**
* **"CHURCH"**
* **"CROSS"**
* **"FENCE"**
* **"FOREST BORDER"**
* **"FOREST SQUARE"**
* **"FOREST TRIANGLE"**
* **"FOREST"**
* **"FORTRESS"**
* **"FOUNTAIN"**
* **"FUELSTATION"**
* **"HIDE"**
* **"HOSPITAL"**
* **"HOUSE"**
* **"LIGHTHOUSE"**
* **"MAIN ROAD"**
* **"POWER LINES"**
* **"POWERSOLAR"**
* **"POWERWAVE"**
* **"POWERWIND"**
* **"QUAY"**
* **"RAILWAY"**
* **"ROAD"**
* **"ROCK"**
* **"ROCKS"**
* **"RUIN"**
* **"SHIPWRECK"**
* **"SMALL TREE"**
* **"STACK"**
* **"TOURISM"**
* **"TRACK"**
* **"TRAIL"**
* **"TRANSMITTER"**
* **"TREE"**
* **"VIEW-TOWER"**
* **"WALL"**
* **"WATERTOWER"**
}}


</spoiler>


---
*Syntaxes:*

`nearestTerrainObjects` [position, types, radius, sort, 2Dmode]

---
*Example 1:*

```sqf
nearestTerrainObjects [player, ["Tree", "Bush"], 200];
```

*Example 2:*

```sqf
nearestTerrainObjects [player, ["House"], 200];
```

*Example 3:*

```sqf
nearestTerrainObjects [[2716, 2949, 0], ["Chapel", "Fuelstation"], 100];
```

*Example 4:*

Return every terrain object in 50 metres radius around player sorted, closest first:

```sqf
nearestTerrainObjects [player, [], 50];
```

*Example 5:*

Return every terrain object in 50 metres radius around player unsorted:

```sqf
nearestTerrainObjects [player, [], 50, false];
```

*Example 6:*

Hide all terrain objects `nearestTerrainObjects` could find:

```sqf
if (isServer) then
{
	private _allTerrainObjects = nearestTerrainObjects
	[
		[worldSize / 2, worldSize / 2],
		[],
		worldSize * sqrt 2 / 2,
		false
	];

	{ _x hideObjectGlobal true } forEach _allTerrainObjects;
};
```