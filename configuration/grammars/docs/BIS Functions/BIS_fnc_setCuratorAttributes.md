<pre>/*

	Description:
	Set which attributes are available for given entity  or entity type.

	Parameter(s):
		0: OBJECT - curator
		1:
			STRING - general setting for all entities of the given type, can be  "object", "player", "group', "waypoint" or "marker"
			OBJECT - setting for specific object, overrides general settings
			GROUP - setting for specific group, overrides general settings
		2: ARRAY of STRINGs - attributes
			object:
				Skill
				UnitPos
				Rank
				Damage
				Fuel
				Lock
				RespawnVehicle
				RespawnPosition
				Exec
			group:
				GroupID
				Behaviour
				Formation
			waypoint:
				Behaviour
				Formation
			marker:
				MarkerText
				MarkerColor

	Returns:
	BOOL
*/</pre>

*(Reference Wiki "placeholder")*


---
*Syntaxes:*

<!-- [] call `BIS_fnc_setCuratorAttributes` -->

---
*Example 1:*

<!-- 
```sqf
[] call BIS_fnc_setCuratorAttributes;
``` -->