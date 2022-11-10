<pre>
/*
	File: fn_createMenu.sqf

	Description:
	Create custom commanding menu (with multiple pages if necessary).

	Parameter(s):
		_this select 0 - STRING or ARRAY - Name of menu or [Name, Context sensitive]
		_this select 1 - STRING - Variable in which will be menu params stored (as variable_0, variable_1, ...)
		_this select 2 - ARRAY - Array with menu items (can be either [items] or `items],[itemNames],[itemEnable` if you want to set custom params (names, enable values))
		_this select 3 - STRING - Name of submenu which will open when item is activated. Name of selected item is passed to string as %1
		_this select 4 - STRING - Expression which is executed when item is activated. Name of selected item is passed to string as %1, ID is %2.
		_this select 5 - ANYTHING (Optional) - params passed to expression. Whole argument is passed as %3
		_this select 6 - BOOLEAN - False to hide number shortcuts

	Returned value(s):
		True
		
	Example:
	  c = ["first","second"]; ["Menu", "b", c, "","hint 'ahoj'"] call BIS_FNC_createmenu; showCommandingMenu "#USER:b_0"  
	  c = `"firstData","secondData"],["First","Second"`; ["Menu", "b", c, "","hint (str '%1' + str '%2' + str '%3')"] call BIS_FNC_createmenu;  showCommandingMenu "#USER:b_0";
	  see news:g7p3po$gik$1@new-server.localdomain
*/</pre>

*(Reference Wiki "placeholder")*


---
*Syntaxes:*

<!-- [] call `BIS_fnc_createmenu` -->

---
