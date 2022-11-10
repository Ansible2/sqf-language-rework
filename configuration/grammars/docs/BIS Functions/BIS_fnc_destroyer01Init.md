<pre>/*
	Author: Bravo Zero One development
	- John_Spartan

	Description:
	- This is a main function designed to assemble dynamic ship (multi-part structure). Ship consists of multiple sub-objects that are linked together based on precise memory point positions in 3D space.

	Execution:
	- Call from EH on the main ship's base model (blank model with memory points and reference config).

		Example:
		class Eventhandlers
		{
			init = "_this call BIS_fnc_Destroyer01Init";								//main init fnc, will assemble ship in game
			AttributesChanged3DEN = "_this call BIS_fnc_Destroyer01EdenInit";			//function to update objects position in EDEN editor if attributes changed by player
			Dragged3DEN = "_this call BIS_fnc_Destroyer01PosUpdate";					//function to update objects position in EDEN editor if attributes changed by player
			RegisteredToWorld3DEN = "_this call BIS_fnc_Destroyer01EdenInit";			//initial EDEN init fnc (main init is still called)
			UnregisteredFromWorld3DEN = "_this call BIS_fnc_Destroyer01EdenDelete";		//function  to delete all ship objects in EDEN editor
		};

	Requirements:
	- Compatible object (carrier/ship) must have a base model with reference memory points and set of parts defined as separate objects in cfgVehicles config with their own models.
	Main ship base must have a definition of all listed sub parts and memory point position to reference it is placement in 3D space.

		Example in cfgVehicles class for ship base
		multiStructureParts[] = {
						{"Land_Destroyer_01_hull_01_F","pos_hull_1"},
						{"Land_Destroyer_01_hull_02_F","pos_hull_2"},
						{"Land_Destroyer_01_hull_03_F","pos_hull_3"},
						{"Land_Destroyer_01_hull_04_F","pos_hull_4"},
						{"Land_Destroyer_01_hull_05_F","pos_hull_5"},
						{"Land_Destroyer_01_interior_02_F","pos_hull_2"},
						{"Land_Destroyer_01_interior_03_F","pos_hull_3"},
						{"Land_Destroyer_01_interior_04_F","pos_hull_4"},
						{"Land_HelipadEmpty_F","pos_heliPad"},
						{"ShipFlag_US_F","pos_Flag"}

					};

	Parameter(s):
		_this select 0: mode (Scalar)
		0: ship Base/object

		and parameters from config

	Returns: exposes and array of objects (ship parts) to other scripts for easy access as variable in it is own object name-space.
	Result: Destroyer (ship) is assembled

*/</pre>*(Reference Wiki "placeholder")*<!-- Remove this after fill-in -->


---
*Syntaxes:*

[] call `BIS_fnc_destroyer01Init`

---
