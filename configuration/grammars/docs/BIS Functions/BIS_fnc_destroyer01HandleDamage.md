<pre>/*
	Author: Bravo Zero One development
	- John_Spartan

	Description:
	- This is a damage visual FX simulation function designed to animate ships bridge windows when shot.
	  Due to engine limitation (damage simulation is disabled for indestructible objects e.g. ships components) this workaround is applied.

	Execution:
	- Call from EH on the ship's model part with windows.

		Example:
		class Eventhandlers
		{
			HitPart = "_this call BIS_fnc_Destroyer01HandleDamage;";
		};

	Requirements:
	- Compatible object (e.g. ship component) must have a set of selections that are setup and named by convention.
	  Selections must be defined as hidden selections in order for setObjectTexture to work.

	Parameter(s):
		_this select 0: mode (Scalar)
		0: event Handler Array as documented here - https://community.bistudio.com/wiki/Arma_3:_Event_Handlers#HitPart

	Returns: nothing
	Result: Destroyer (ship) window textures are swapped for damaged ones. Simple swap.

*/</pre>*(Reference Wiki "placeholder")*<!-- Remove this after fill-in -->


---
*Syntaxes:*

[] call `BIS_fnc_destroyer01HandleDamage`

---
