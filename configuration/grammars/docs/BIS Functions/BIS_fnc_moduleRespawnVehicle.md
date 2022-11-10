<pre>/*

	Description:
	Set vehicle respawn, compatible both with SP and MP.

	Parameter(s):
		0: OBJECT - vehicle
		1:
			NUMBER - respawn delay in seconds (default is 0)
			BOOL - true to remove vehicle respawn (further params are ignored), false to check if the vehicle is marked for respawn
		2: NUMBER - how long until the vehicle is automatically respawned after its crew leaves it (default is -1, i.e., disabled)
		3: NUMBER - number of time the vehicle can be respawned (default is -1, i.e., unlimited)
		4: CODE - code executed upon respawn. Passed arguments are [<newVehicle>,<oldVehicle>]. The old vehicle is deleted only after this code is completed.
		5: POSITION - type of respawn position:
			0 = where it started
			1 = where it was destroyed
			2 = on vehicle's side respawn marker (e.g., "respawn_vehicle_west")
			3 = on BLUFOR respawn marker
			4 = on OPFOR respawn marker
			5 = on Independent respawn marker
			6 = on Civilian respawn marker
			7 = on side respawn marker of unit which destroyed the vehicle
		6: NUMBER - position selection type (0 = random, 1 = newest, 2 = oldest)
		7: NUMBER - type of old vehicle deletion (0 = don't delete, 1 = delete, 2 = delete with an explosion effect)
		8: BOOL - true to show notifcation when the vehicle is respawned

	Returns:
	BOOL
*/</pre>


---
*Syntaxes:*

<!-- [] call `BIS_fnc_moduleRespawnVehicle` -->

---
*Example 1:*

<!-- 
```sqf
[] call BIS_fnc_moduleRespawnVehicle;
``` -->