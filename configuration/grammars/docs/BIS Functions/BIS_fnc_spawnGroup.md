Function which handles the spawning of a dynamic group of characters.  The composition of the `group` can be passed to the function.  Alternatively a number can be passed and the function will spawn that amount of characters with a random type.


---
*Syntaxes:*

[position, side, toSpawn, relPositions, ranks, skillRange, ammoRange, randomControls, azimuth, precisePos, maxVehicles] call `BIS_fnc_spawnGroup`

---
*Example 1:*

Spawn five random EAST units at aPosition:

```sqf
[getPosATL aPosition, east, 5] call BIS_fnc_spawnGroup;
```

*Example 2:*

Spawn a Stryker MGS Platoon at marker "tankSpawn":

```sqf
[getMarkerPos "tankSpawn", side player, (configFile >> "CfgGroups" >> "West" >> "BIS_US" >> "Armored" >> "US_MGSPlatoon")] call BIS_fnc_spawnGroup;
```

*Example 3:*

Spawn a TK Militia Medic and Soldier at aPos facing south:

```sqf
[getPos aPos, east, ["TK_INS_Bonesetter_EP1", "TK_INS_Soldier_2_EP1"],[],[],[],[],[],180] call BIS_fnc_spawnGroup;
```