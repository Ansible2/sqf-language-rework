<pre>/*
	Author: Bravo Zero One development
	- John_Spartan

	Description:
	- This is sub function for 'boat recovery' functionality.

	Execution:
	- Call from Init EH script that is added to object (boat rack).

	Example:
		[_boatRack] spawn BIS_fnc_boatRack01InitAdjustZOffsets;

	Required:
		Object (boat rack) must have vehicle in vehicle behavior configured (https://community.bistudio.com/wiki/Arma_3_Vehicle_in_Vehicle_Transport).
		Object (boat rack) must have triggers set up with continuous actions.
		Object (boat rack) must have set of Z offset's predefined in cfgVehicles for know/supported boat types.

		Parameters used from cfgVehicles configuration:
		cargoBayAnimationSelection 		= "CargoBay_Move_Z";
		supportedVehicleOffsetsZ[]		= {{"C_Boat_Civil_01_F",0.55}};

	Parameter(s):
		_this select 0: mode (Scalar)
		0: boat rack object
		and
		other parameters from boat rack's cfgVehicles configuration.

	Returns: nothing
	Result: On mission startup adjusts the hight (Z offset) of boat rack suspension to prevent different boats clipping with visual mesh.

*/</pre>*(Reference Wiki "placeholder")*<!-- Remove this after fill-in -->


---
*Syntaxes:*

[] call `BIS_fnc_boatRack01InitAdjustZOffsets`

---
