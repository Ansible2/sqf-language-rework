<pre>/*

	Description:
		Add point of interest shown in the map

	Parameter(s):
		0: STRING - unique ID of the point
		1:
			BOOL - true if the point is completed (shown faded in the map)
			NUMBER - status, can be:
				-1: dormant, will be activated when player gets close
				 0: shown, but not completed
				+1: completed
		2: ARRAY - position
		3: ARRAY - area in format [width,height,angle,isRectangle]
		4: STRING - type, can be "Unknown" or "Warning" (default: "Unknown")
		5: STRING - color, can be "Black", "Blue" or "Red" (default: "Black")

		or

		0: OBJECT - "Point of interest" module

	Returns:
		STRING - ID of the point

	Examples:

		//--- Activate existing module
		_myID = myModule call BIN_fnc_setPointOfInterest;

		//--- Mark POI as completed
		[_myID,true] call BIN_fnc_setPointOfInterest;

		//--- Set custom POI
		["myID",false,position myObject,[50,50,0,false],"Warning","Red"] call BIN_fnc_setPointOfInterest;

		//--- Set custom POI using default type and color
		["myID",false,position myObject,[50,50,0,false]] call BIN_fnc_setPointOfInterest;
*/

#define VAR			"bin_POIs"
#define TASK_PRIORITY		2
#define REVEAL_DISTANCE		100

#define POS_DEFAULT		[]
#define AREA_DEFAULT		[]
#define TYPE_DEFAULT		""
#define COLOR_DEFAULT		""
#define STATUS_DEFAULT		0

*(Reference Wiki "placeholder")*


---
*Syntaxes:*

<!-- [] call `BIN_fnc_setPointOfInterest` -->

---
