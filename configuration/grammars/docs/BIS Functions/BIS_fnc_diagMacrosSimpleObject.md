<pre>/*
	Generates simple object config data.

	Parameters:
		0: OBJECT or ARRAY - ground position where ground objects will be created (default: position calculated 15 meters away from player)
		1: SCALAR or BOOL - autolog mode (default: false)
			0 or false - no autolog, results will be only stored in clipboard
			1 or true - autolog on, results will be stored in \A3\macros_CfgVehicles_simpleObject_auto_A3.hpp file.
			2 - autlog on + world name, random number and custom suffix are appended to name of generated file to prevent overwriting and provide extra info
		2: ARRAY - classes you want to scan, use [] to scan all (default: []).
		3: OBJECT or ARRAY - sea position where ground objects will be created (default: position calculated 15 meters away from player)
		4: STRING - custom suffix added to filename if autolog is used (default: "").

	Example:
	bis_scriptHandle = [] spawn BIS_fnc_diagMacrosSimpleObject;

	Expected output per class (animate and hide arrays can have varying amount of elements):
	#define CFGVEHICLES_SIMPLEOBJECT_class_F\
		class SimpleObject\
		{\
			animate[] =\
			{\
				{"animationName1", 1},\
				{"animationName2", 2}\
			};\
			hide[] =\
			{\
				"animationSelection1",\
				"animationSelection2"\
			};\
			verticalOffsetAsl = 0;\
		};
*/</pre>*(Reference Wiki "placeholder")*<!-- Remove this after fill-in -->


---
*Syntaxes:*

[] call `BIS_fnc_diagMacrosSimpleObject`

---
