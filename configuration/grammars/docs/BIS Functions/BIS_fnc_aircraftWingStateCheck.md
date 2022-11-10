<pre>/*
	Author: Bravo Zero One development
	- John_Spartan

	Description:
	- This function is designed to prevent take off with folded wings on the Jets DLC aircraft that have such useraction/function enabled.

	Exucution:
	- Call the function via int EH on each aircrfat config
		class Eventhandlers: Eventhandlers
		{
			init = "_this call BIS_fnc_AircraftSystemsInit";
		};

	Requirments:
	- Compatible aircrfat must have a config definition for all subsytems that will be invoked by this function

		example of cfgVehicles subclass definitions;
		class AircraftAutomatedSystems
		{
			wingStateControl = 1;											//enable automated wing state control to prevent player to take off with folded wings
			wingFoldAnimations[] = {"wing_fold_l","wing_fold_r","wing_fold_cover_l", "wing_fold_cover_r"};		//foldable wing animation list
			wingStateFolded = 1;											//animation state when folded
			wingStateUnFolded = 0;											//animation state when un-folded
			wingAutoUnFoldSpeed = 40;										//speed treshold when triger this feature, and unfold wings for player

		};

	Parameter(s):
		_this select 0: mode (Scalar)
		0: plane/object

	Returns: nothing
	Result: Aircrfat should not be able to take off/ fly with wings folded

*/</pre>

*(Reference Wiki "placeholder")*


---
*Syntaxes:*

<!-- [] call `BIS_fnc_aircraftWingStateCheck` -->

---
