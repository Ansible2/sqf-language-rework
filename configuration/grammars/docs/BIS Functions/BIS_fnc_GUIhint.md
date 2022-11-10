<pre>/*

	Description:
	Creates advanced hintC dialog

	Parameter(s):
	_this select 0: ARRAY in format
		[text,picture]
			* text: STRING - hint text
			* picture: STRING - picture
		[item1,item2...] - Listbox item ARRAYs in format
			[itemText,itemDescription,picture,icon]
				* itemText: STRING - Text displayed in listbox
				* itemDescription (Optional): STRING - text displayed after clicking on item
				* picture (Optional): STRING - picture displayed after clicking on item
				* icon (Optional): STRING - icon displayed in listbox left from text
	_this select 1 (Optional): STRING - hint header
	_this select 2 (Optional): ARRAY - [STRING,CODE,NUMBER] - text on left button (when "", button is hidden), code executed upon clicking and fade out delay. If only text is present, button is disabled.
	_this select 3 (Optional): ARRAY - [STRING,CODE,NUMBER] - STRING - text on right button and code executed upon clicking
	_this select 4 (Optional): ARRAY - [STRING,CODE,NUMBER] - STRING - text on middle button and code executed upon clicking
	_this select 5 (Optional): NUMBER or ARRAY - width or [width,height] of picture (in grid coordinates). Width > 17 means only picture is used.

	Returns:
	ARRAY - [endState(,lbId)]
		* endState: NUMBER - 1 when clicked on right button, -1 when clicked on left button, 0 when escaped
		* lbId: NUMBER - selected listbox item (when listbox was used)
*/

#define DISPLAY_CLASS	'Hsim_RscDisplayCommonHint_guiHint'
#define DISPLAY_CONFIG	(configfile >> "RscDisplayCommonHint")
#define DISPLAY		(uinamespace getvariable DISPLAY_CLASS)
#define CONTROL		(DISPLAY displayctrl _idc)

#define CONTROL_FADEINTIME	0.3
#define CONTROL_FADEIN \
	CONTROL ctrlsetfade 1; \
	CONTROL ctrlcommit 0; \
	CONTROL ctrlsetfade 0; \
	CONTROL ctrlcommit CONTROL_FADEINTIME;

*(Reference Wiki "placeholder")*


---
*Syntaxes:*

<!-- [] call `BIS_fnc_GUIhint` -->

---
