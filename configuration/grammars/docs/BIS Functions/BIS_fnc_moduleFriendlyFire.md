<pre>/*******************************************************************************
	Version:			2.0
	Name:				Friendly Fire
	Author:				Zozo
	DESCRIPTION:	Handles the friendly fire. Use either the module interface in the editor, or call individual functions.
	PARAMETERS:		1) function called - string, list of functions:
				- Init
				- Destroy
				- AddUnits
				- RemoveUnits
				- ChangePriority
				- ListActiveUnit
				2) parameter for the function
	RETURNED VALUE:	depends on the function called
		EXAMPLES:
				// Initializes the module if not added in editor
				// No units are directly checked for friendly fire, but renegade state is checked anyway
				_ret = [ "Init", [] ] call BIS_fnc_moduleFriendlyFire

				// Initializes the module if not added in editor
				// BIS_vip1, BIS_vip2, BIS_noVip units are directly checked for friendly fire
				x = [ "Init", [ [ BIS_vip1, BIS_vip2, BIS_noVip],true ] ] call BIS_fnc_moduleFriendlyFire

				// De-initializes the module
				_ret = [ "Destroy" ] call BIS_fnc_moduleFriendlyFire

				// Add BIS_vip3 unit to be checked for friendly fire
				x = [ "AddUnits", [ [BIS_vip3] ] ] call BIS_fnc_moduleFriendlyFire

				// Remove BIS_vip1 unit from active units
				x = [ "RemoveUnits", [ [ BIS_vip1 ] ] ] call BIS_fnc_moduleFriendlyFire

				// set another priority for a vehicle- if it is hit once, considered as friendly fire
				x = [ "ChangePriority",  [BIS_vip,1] ] call BIS_fnc_moduleFriendlyFire

*******************************************************************************/</pre>

*(Reference Wiki "placeholder")*


---
*Syntaxes:*

<!-- [] call `BIS_fnc_moduleFriendlyFire` -->

---
*Example 1:*

<!-- 
```sqf
[] call BIS_fnc_moduleFriendlyFire;
``` -->