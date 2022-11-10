<pre>/*
	Author: Bravo Zero One development
	- John_Spartan

	Description:
	- This is a sub function designed to handle animations of ship hangar doors.

	Execution:
	- Call from vehicle user actions.

		Example:
			class OpenHangarDoor_1
			{
				displayNameDefault		="<img image='\A3\Ui_f\data\IGUI\Cfg\Actions\open_door_ca.paa' size='2.5' />";
				displayName 			= $STR_DN_OUT_O_DOOR;
				position 				= "pos_Door_Hangar_1_Trigger";
				priority 				= 0.4;
				radius 					= 1.5;
				onlyForPlayer 			= 0;
				condition 				= "(((nearestObjects [this,[""Land_Destroyer_01_hull_04_F""],50, false]) select 0) animationPhase ""Door_Hangar_1_1_open"") < 0.1;";
				statement 				= "[this,1] call BIS_fnc_destroyer01OperateHangarDoors;";
			};
			class CloseHangarDoor_1: OpenHangarDoor_1
			{
				displayName 			= $STR_DN_OUT_C_DOOR;
				position 				= "pos_Door_Hangar_1_Trigger";
				condition 				= "(((nearestObjects [this,[""Land_Destroyer_01_hull_04_F""],50, false]) select 0) animationPhase ""Door_Hangar_1_1_open"") >= 0.1;";
				statement 				= "[this,0] call BIS_fnc_destroyer01OperateHangarDoors;";
			};

	Required:
		Object (ship) must have all animations correctly defined and user actions configured.

	Parameter(s):
		_this select 0: mode (Scalar)
		0: ship-part object
		and
		1: animation state of doors

	Returns: nothing
	Result: Ship's hangar door animation is played with sounds added.
			Calls BIS_fnc_destroyer01AnimateHangarDoors to execute action.

*/</pre>*(Reference Wiki "placeholder")*<!-- Remove this after fill-in -->


---
*Syntaxes:*

[] call `BIS_fnc_destroyer01OperateHangarDoors`

---
