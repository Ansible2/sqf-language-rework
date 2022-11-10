<pre>/*

	Description:
	Return all child classes of given class.

	Remark(s):
	* Can by called 2 ways:
		* 1st way (general) works for any config.
		* 2nd way is for comfortable working with mission description.ext.

	Parameter(s):
		_this: CFG
		_this: ARRAY of STRINGS - missionConfigFile classes and an attribute.

	Example:

	* 1st way of calling:

		_subclasses = (missionconfigfile >> "Hubs" >> "A1" >> "QuickStart") call Bis_fnc_getCfgSubClasses;

	* 2nd way of calling:

		_subclasses = ["Hubs"] call Bis_fnc_getCfgSubClasses;

	Returns:
		ARRAY (of STRINGS with sub-classes names)
*/</pre>

*(Reference Wiki "placeholder")*


---
*Syntaxes:*

<!-- [] call `BIS_fnc_getCfgSubClasses`; -->

---
*Example 1:*

```sqf
private _allVehHitPoints = (configfile >> "CfgVehicles" >> "C_Hatchback_01_sport_F" >> "HitPoints") call BIS_fnc_getCfgSubClasses;
```