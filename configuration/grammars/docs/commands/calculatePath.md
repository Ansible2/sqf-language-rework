Spawns an agent that will execute an AI path calculation and fire the **"PathCalculated"** [[Arma_3:_Event_Handlers#PathCalculated | event handler]]. The vehicle type to simulate could be one of the following presets:
{{Columns|2|
* **"man"** (will use "C_man_1")
* **"car"** (will use "C_Offroad_01_F")
* **"tank"** (will use "B_MBT_01_cannon_F")
* **"wheeled_APC"** (will use "B_APC_Tracked_01_rcws_F")
* **"boat"** (will use "C_Rubberboat")
* **"plane"** (will use "B_Plane_CAS_01_dynamicLoadout_F")
* **"helicopter"** (will use "B_Heli_Light_01_F")


---
*Example 1:*
```sqf
calculatePath ["car", "safe", [2150.67,5778.19,0], [2184.11,5802.28,0]];
```

*Example 2:*
Draws the path from South West to North East of Agia Marina:

```sqf
(calculatePath ["man","safe",[2832.9,5927.79,0],[3107.46,6036.61,0]]) addEventHandler ["PathCalculated", {
	{
		private _marker = createMarker ["marker" + str _forEachIndex, _x];
		_marker setMarkerType "mil_dot";
		_marker setMarkerText str _forEachIndex;
	} forEach (_this select 1);
}];
```

*Example 3:*
Alternative usage of `calculatePath` functionality that is free of double execution bug (and calculatePath command):

```sqf
private _agent = createAgent [typeOf player, position player, [], 0, "NONE"];
_agent addEventHandler ["PathCalculated",
{ 
	{ 
		private _marker = createMarker ["marker" + str _forEachIndex, _x];
		_marker setMarkerType "mil_dot";
		_marker setMarkerText str _forEachIndex;
	} 
	forEach (_this select 1);
}];
_agent setDestination [player getRelPos [500, 0], "LEADER PLANNED", true];
```

*Example 4:*
Same as above but for a vehicle:

```sqf
private _agent = createAgent [typeOf player, position player, [], 0, "NONE"];
private _car = "B_Quadbike_01_F" createVehicle position player;
_agent moveInDriver _car;
_agent addEventHandler ["PathCalculated",
{ 
	{ 
		private _marker = createMarker ["marker" + str _forEachIndex, _x];
		_marker setMarkerType "mil_dot";
		_marker setMarkerText str _forEachIndex;
	} 
	forEach (_this select 1);
}];
_agent setDestination [player getRelPos [500, 0], "LEADER PLANNED", true];
```