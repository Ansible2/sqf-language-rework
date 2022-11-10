<pre>/*

	Description:
		Register entities to a site, so they can be despawned with the rest when player leaves the area.

	Parameter(s):
		0: OBJECT - site logic. The site must be spawned for the function to work.
		1: ARRAY - entities to be added. Types can be mixed, the system will sort them out itself.

	Returns:
		BOOL - true if added
*/

#define ADD(ID)\
	(_entities select ID) pushback _x;\
	(_entityIDs select ID) pushback -1;

*(Reference Wiki "placeholder")*


---
*Syntaxes:*

<!-- [] call `BIN_fnc_addSiteEntities` -->

---
*Example 1:*

<!-- 
```sqf
[] call BIN_fnc_addSiteEntities;
``` -->