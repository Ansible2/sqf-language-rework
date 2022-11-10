<pre>/*
	Author: Bravo Zero One development
	- John_Spartan

	Description:
	- This function is designed as part of set of functions to implement semi-authenthic ejection system on fixed wing aircrfat that have such functionality enabled/configured.
	- Additional option for player to separate from ejetor seat via user action. default ejection function will ato deploy parachute at 350 m altitude. This is a manual override.
	- Generic parachute used, currently only one model in game so no need to parametarize.

	Exucution:
	- Call the function via user action defined on the ejector seat vehicle.

		Example:
		class UserActions
	    {

			class Ejection_Seat_Eject
			{
				priority = 0.05;
				shortcut = "Eject";
				displayName = "$STR_A3_action_deploy_parachute";
				condition = "player in this";
				statement = "[this] spawn BIS_fnc_ejectionSeatRelease";
				position = "pilotcontrol";
				radius = 10;
				onlyforplayer = 1;
				showWindow = 0;
				hideOnUse = 1;
			};
		};

	Requirments:
	- Compatible ejector seat must have a user action set up to triger this fnc.

	Parameter(s):
		_this select 0: mode (Scalar)
		0: ejector seat/object

	Returns: nothing
	Result: Pilot will be forced from ejection seat vehicle to parachute. Semi-authenthic behaviour.
*/</pre>

*(Reference Wiki "placeholder")*


---
*Syntaxes:*

<!-- [] call `BIS_fnc_ejectionSeatRelease` -->

---
*Example 1:*

<!-- 
```sqf
[] call BIS_fnc_ejectionSeatRelease;
``` -->