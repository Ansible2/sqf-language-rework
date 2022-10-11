Changes the terrain height of the cell in which given position lies. This command is only available with [[Arma 3: Diagnostics Exe]].


---
*Example 1:*
```sqf
private _fnc_flattenTerrain =
{
	params ["_start", "_a", "_b", "_h"];

	for "_xStep" from 0 to _a do
	{
		for "_yStep" from 0 to _b do
		{
			_start vectorAdd [_xStep, _yStep, 0] diag_setTerrainHeight _h;
		};
	};
};

private _desiredTerrainHeight = 150;
[getPosWorld player, 50, 50, _desiredTerrainHeight] spawn _fnc_flattenTerrain;
```