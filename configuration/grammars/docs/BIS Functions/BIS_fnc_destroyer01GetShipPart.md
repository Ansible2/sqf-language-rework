<pre>/*
	Author: Bravo Zero One development
	- John_Spartan

	Description:
	- This is a helper function to get ship components (objects) by class name from stored array in ships master component's name-space ("BIS_CarrierParts" array).

	Execution:
	- Call from script or config.

		Example:
		[_this, 'Land_Destroyer_01_hull_05_F'] call BIS_fnc_destroyer01GetShipPart;

	Requirements:
	- Ships master object must be present. Ships master object must have initialized the array of sub components.

	Parameter(s):
		_this select 0: mode (Scalar)
		0: ship Base/object
		1: ship part class name to find

	Returns: object (ship part that matches selected class name)
	Result: n/a

*/</pre>*(Reference Wiki "placeholder")*<!-- Remove this after fill-in -->


---
*Syntaxes:*

[] call `BIS_fnc_destroyer01GetShipPart`

---
