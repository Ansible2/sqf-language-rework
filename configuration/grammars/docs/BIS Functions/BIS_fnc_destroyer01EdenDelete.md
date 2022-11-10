<pre>/*
	Author: Bravo Zero One development
	- John_Spartan

	Description:
	- This is a sub function designed to delete dynamic ships (multi-part structure) in EDEN editor. Ship consists of multiple sub-objects that are linked together based on precise memory point positions in 3D space.
	Function will delete ship parts in EDEN editor after main object is deleted.

	Execution:
	- Call from EH on the main ship base model (blank model with memory points and reference config).

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
	- An array of ship parts/objects as a variable attached to main ship base. This array is created by main BIS_fnc_Destroyer01Init.

	Parameter(s):
		_this select 0: mode (Scalar)
		0: ship Base/object
		and
		1: array of objects in variable in base objects name-space ["bis_carrierParts", []];

	Returns: nothing
	Result: Ship's parts are deleted in EDEN editor.

*/</pre>*(Reference Wiki "placeholder")*<!-- Remove this after fill-in -->


---
*Syntaxes:*

[] call `BIS_fnc_destroyer01EdenDelete`

---
