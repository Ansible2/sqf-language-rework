Set the current terrain's altitude on provided location(s).
).
* Edited terrain heights are `not` saved inside savegames, they need to be restored manually on savegame load.
* Known issues:
** Terrain sections can become invisible if the change is to extreme
** Walking on the edge of extreme height changes can catapult the player away


---
*Example 1:*
```sqf
private _fnc_flattenTerrain =
{
	params ["_start", "_a", "_b", "_h"];
	private _newPositions = [];

	for "_xStep" from 0 to _a do
	{
		for "_yStep" from 0 to _b do
		{
			private _newHeight = _start vectorAdd [_xStep, _yStep, 0];
			_newHeight set [2, _h];
			_newPositions pushBack _newHeight;
		};
	};

	_newPositions;
};

private _desiredTerrainHeight = 150;
private _positionsAndHeights = [getPosWorld player, 50, 50, _desiredTerrainHeight] call _fnc_flattenTerrain;
setTerrainHeight [_positionsAndHeights, true];
```

*Example 2:*
Bad example:

```sqf
// first update
setTerrainHeight [[[1000, 1000, 25], [1005, 1000, 25], [1000, 1005, 25], [1005, 1005, 25]]];

// second update - this will make the JIP queue keep both messages
setTerrainHeight [[[1005, 1000, 50]]];
```

Good example:

```sqf
// first update
setTerrainHeight [[[1000, 1000, 25], [1005, 1000, 25], [1000, 1005, 25], [1005, 1005, 25]]];

// second update - this will update the JIP queue properly
setTerrainHeight [[[1000, 1000, 25], [1005, 1000, 50], [1000, 1005, 25], [1005, 1005, 25]]];
```