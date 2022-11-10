<pre>/*

	Description:
	* Get array of attribute values out of the parent config class.
	* Attributes need to be in this format: "_n", where n is an index number (starting from 0).
	* If any discrepancy in indexing is detected, loading will stop and only the correctly indexed values will be returned.
	* Max. index supported is 99.
	* If more then 9 attributes used, 0-9 need to use leading zeroes.

	CFG example:

	class Timeline
	{
		class StageA
		{
			_0[] = {2035,7,7,04,30};
			_1[] = {2035,7,7,06,15};
			_2[] = {2035,7,7,18,35};
			_3[] = {2035,7,8,09,05};
			_4[] = {2035,7,8,13,25};
			_5[] = {2035,7,8,17,10};
			_6[] = {2035,7,8,21,40};
			_7[] = {2035,7,9,19,55};
		};
	};

	Remark(s):
	* Can by called 2 ways:
		* 1st way (general) works for any config.
		* 2nd way is for comfortable working with mission description.ext.

	Parameter(s):
		_this: CFG
		_this: ARRAY of STRINGS - missionConfigFile classes.

	Example:

	* 1st way of calling:

		_array = (configfile >> "BulletBubbles" >> "BulletBubbles1") call BIS_fnc_getCfgData;
		_array = (missionconfigfile >> "Timeline" >> "StageA") call BIS_fnc_getCfgData;

	* 2nd way of calling:

		_array = ["Timeline","StageA"] call BIS_fnc_getCfgData;

	Returns:
		ARRAY or nil, if parent class is not found
*/</pre>

*(Reference Wiki "placeholder")*


---
*Syntaxes:*

<!-- [] call `BIS_fnc_getCfgDataPool` -->

---
*Example 1:*

<!-- 
```sqf
[] call BIS_fnc_getCfgDataPool;
``` -->