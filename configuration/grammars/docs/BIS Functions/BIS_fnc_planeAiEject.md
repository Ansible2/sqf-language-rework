<pre>/*
	Author: Bravo Zero One development
	- John_Spartan

	Description:
	- This function is designed as part of set of functions to implement semi-authenthic ejection system on fixed wing aircrfat that have such functionality enabled/configured.
	- AI behaviour handler.

	Exucution:
	- Call the function via attached EH to the aircrfat itself.

		Example:
		class Eventhandlers: Eventhandlers
		{
			Hit = "_this call BIS_fnc_planeAiEject";
		};

	Requirments:
	- Compatible aircrfat must have a config definition for all subsytems that will be invoked by ejection system (see BIS_fnc_PlaneEjection).

	Parameter(s):
		_this select 0: mode (Scalar)
		0: plane/object

	Returns: nothing
	Result: AI pilot will be forced to eject from aircrfat upon damage treshold reached. Semi-authenthic behaviour.

*/</pre>

*(Reference Wiki "placeholder")*


---
*Syntaxes:*

<!-- [] call `BIS_fnc_planeAiEject` -->

---
*Example 1:*

<!-- 
```sqf
[] call BIS_fnc_planeAiEject;
``` -->