<pre>/*

	Description: Sets EMP parameters to a vehicle. Destroys lights and optionally prevents vehicle from starting

	Parameter(s):
		0: OBJECT - Vehicle that will get destroyed electronics
		1: (Optional): BOOL - Sets engine destroyed - true = engine destroyed, false = engine operating (default: true)
		2: (Optional): BOOL - Handle AI in EMP vehicle - true = AI will exit vehicle and not enter new vehicles, false = AI will remain in vehicle (default: true)

	Note that the player has to be defined as bin_player for the voice lines to be spoken

	Examples:

		[bin_vehicle,true,true] call BIN_fnc_empVehicle; //Destroys lights and prevents vehicle from starting, AI will exit vehicle after it has stopped

		[bin_vehicle,false,false] call BIN_fnc_empVehicle; //Destroys lights, but engine can still start and vehicle can be driven, AI will remain in vehicle
*/</pre>

*(Reference Wiki "placeholder")*


---
*Syntaxes:*

<!-- [] call `BIN_fnc_empVehicle` -->

---
*Example 1:*

<!-- 
```sqf
[] call BIN_fnc_empVehicle;
``` -->