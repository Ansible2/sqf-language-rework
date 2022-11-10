<pre>/*
	Author: Bravo Zero One development
	- John_Spartan

	Description:
	- This function is designed as part of set of functions to implement semi-authenthic ejection system on fixed wing aircrfat that have such functionality enabled/configured.
	- Function created to add FX (sound/particles) for ejection feature.

	Exucution:
	- Call from within the main ejection fnc (on demand).

		Example:
		[_plane, _ejectionSeat] spawn BIS_fnc_planeEjectionFX;

	Requirments:
	- Compatible ejector seat must have a hide animation for rocket motor flash and position for FX to be attached. (TO DO PARAMETARIZE)
		Inehector seats model.cfg
		class Animations
		{

			class Rocket_Flash_hide
			{
				type = "hide";
				source = "user";
				selection = "rocket_flash";
				sourceAddress = "mirror";
				minValue = -1.5;
				maxValue = 0;
				hideValue = 0.99;

			};
		};

	Parameter(s):
		_this select 0: mode (Scalar)
		0: plane/object
		1: ejector seat/object

	Returns: nothing
	Result: Set of particle FX and sound FX will be aplied to ejection feature.
*/</pre>

*(Reference Wiki "placeholder")*


---
*Syntaxes:*

<!-- [] call `BIS_fnc_planeEjectionFX` -->

---
*Example 1:*

<!-- 
```sqf
[] call BIS_fnc_planeEjectionFX;
``` -->