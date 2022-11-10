<pre>/*
	Author: Bravo Zero One development
	- John_Spartan

	Description:
	- This function is designed to implement semi-authenthic ejection system on fixed wing aircrfat that have such functionality enabled/configured.

	Exucution:
	- Call the function via user action added to the aircrfat itself.

			class Plane_Eject_UserActionExample
			{
				priority = 0.05;
				shortcut = "Eject";
				displayName = "$STR_A3_action_eject";
				condition = "player in this";
				statement = "[this] spawn BIS_fnc_planeEjection";
				position = "pilotcontrol";
				radius = 10;
				onlyforplayer = 1;
				showWindow = 0;
		                hideOnUse = 1;
			};

	Requirments:
	- Compatible aircrfat must have a config definition for all sub-sytems that will be invoked by this function.
		1. Old legacy ejection must be disabled in aircrfat's cfgVehicles configuration.
		driverCanEject = 0;
		gunnerCanEject = 0;
		cargoCanEject = 0;

		2. Aircrfat must have a set of parameters defined in CfgVehicles subClass (EjectionSystem) for ejection system. Theese parameters will affect the ejection behaviour.
		example of cfgVehicles subclass definitions;

		class EjectionSystem
		{
			EjectionSeatEnabled = 1;										//enable advanced ejection system
			EjectionDual = 0;											//currently only single seat aircraft ejectiion supported (to do for latter)
			EjectionSeatClass = "B_Ejection_Seat_Plane_Fighter_01_F";								//class name of ejector seat to use (separate vehicle/object)
			CanopyClass = "Plane_Fighter_01_Canopy_F";								//class name of canopy to use (separate vehicle/object)
			EjectionSeatHideAnim = "ejection_seat_hide";								//name of the hide animation that will hide ejector seat mesh in plane
			EjectionSeatRailAnim = "ejection_seat_motion";								//name of the animation that will be played to start a smooth ejection motion out of cockpit
			CanopyHideAnim = "canopy_hide";										//name of the hide animation that will hide canopy mesh in plane
			EjectionSeatPos = "pos_eject";										//position memory point whwre to attach ejector seat
			CanopyPos = "pos_eject_canopy";										//position memory point where to attach dummy canopy
			EjectionSoundExt = "Plane_Fighter_01_ejection_ext_sound";						//sound to play when ejection trigered (external)
			EjectionSoundInt = "Plane_Fighter_01_ejection_in_sound";						//sound to play when ejection trigered (in-ternal)
			EjectionParachute = "Steerable_Parachute_F";								//class name parachute used in ejection
			EjectionSeatForce = 50;											//ejection seat blast force
			CanopyForce = 30;											//canopy bast force

		};

		3. Aircrfat model must have momory points definig positions where to attach new vehicle ejector seat, new vehicle canopy.
		4. Aircrfat model (in model cfg & class AnimationSources) must have a set of hide animations defined to hide ejector seat and canopy in model when new seaparate vehicles are spawned.

		In model.cfg
		class canopy_hide
		{
			type="hide";
			source="user";
			selection="canopy_hide";
			minValue = 0.0;
			maxValue = 1.0;
			minPhase = 0.0;
			maxPhase = 1.0;
			initPhase = 0;
			hideValue = 0.001;
		};

		class ejection_seat_hide
		{
			type="hide";
			source="user";
			selection="ejection_seat";
			minValue = 0.0;
			maxValue = 1.0;
			minPhase = 0.0;
			maxPhase = 1.0;
			initPhase = 0;
			hideValue = 0.001;
		}

		In cfgVehicles >> class AnimationSources
		class canopy_hide
		{
			source = "user";
			animPeriod = 0.001;
			initPhase = 0;
		};

		class ejection_seat_hide
		{
			source = "user";
			animPeriod = 0.001;
			initPhase = 0;
		};

		5. Aircrfat model must have an animation for initial ejection stage, where new ejector seat with pilot is pushed gradualy out of cockpit (done to avaoid PhysX colisions and make this feature look good, rathre than spawnig ejetor seat above plane).
		New ejector seat with pilot will be attached to this animation (via animated meory point).
		Memory point EjectionSeatPos must be part of this animated selection.

		In model.cfg
		class ejection_seat_motion
		{
			type = "translation";
			source = "user";
			selection = "ejection_seat";
			begin = "tns_ejection_seat";
			end = "tns_ejection_seat_e";
			animPeriod = 0;
			memory = 1;
			minValue = 0.0;
			maxValue = 1.0;
			offset0 = 0.0;
			offset1 = 3.0;
		};

		In cfgVehicles >> class AnimationSources
		class ejection_seat_motion
		{
			source = "user";
			animPeriod = 0.25;
			initPhase = 0;
		};

		6. Ejector seat and canopy must be created/defined as separate objects. Can be reused.

	Parameter(s):
		_this select 0: mode (Scalar)
		0: plane/object

		other parameters are gathered from configuration files.

	Returns: nothing
	Result: Pilot will be ejected from aircraft. Semi-authenthic behaviour.

*/</pre>

*(Reference Wiki "placeholder")*


---
*Syntaxes:*

<!-- [] call `BIS_fnc_planeEjection` -->

---
*Example 1:*

<!-- 
```sqf
[] call BIS_fnc_planeEjection;
``` -->