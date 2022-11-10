<pre>/*
	Author: Bravo Zero One development
	- John_Spartan

	Description:
	- This is a sub function designed to customize ships hull numbers.

	Execution:
	- Call from vehicles config of eden attributes.

		Example:
			class CustomShipNumber1
			{
				displayName="$STR_3den_object_attribute_CustomShipNumber1_displayname";
				tooltip="$STR_3den_object_attribute_CustomShipNumber1_tooltip";
				property="CustomShipNumber1";
				control="EditShort";
				expression="[([_this, 'Land_Destroyer_01_hull_01_F'] call BIS_fnc_destroyer01GetShipPart), _value, 0] spawn BIS_fnc_destroyer01InitHullNumbers;";
				defaultValue="0";
				validate = "number";
				condition = "object";
				typeName = "NUMBER";
			};

	Required:
		Object (ship) must have predefined hidden selections for hull number. Pass object of ship part component which contains numbered selections.

	Parameter(s):
		_this select 0: mode (Scalar)
		0: ship-part object
		and
		1: number that should be displayed on the selection
		2: selection number

	Returns: nothing
	Result: Ship's hull number is set to specified number.

*/</pre>*(Reference Wiki "placeholder")*<!-- Remove this after fill-in -->


---
*Syntaxes:*

[] call `BIS_fnc_destroyer01InitHullNumbers`

---
