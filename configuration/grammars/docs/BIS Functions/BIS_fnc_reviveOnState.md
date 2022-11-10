<pre>/*
	Author: Jiri Wainar

	Description:
	Used to execute specific code localy on every client whenever unit's state changes.

	Parameters:
		_this select 0: STRING - Variable that carries the state value over the network, defined by macro VAR_TRANSFER_STATE.
		_this select 1: SCALAR - State.
		_this select 2: OBJECT - Unit to set the status for.

	Returns:
	True if successful, false if not.

	States:
		#define STATE_RESPAWNED			0
		#define STATE_REVIVED			1
		#define STATE_INCAPACITATED		2
		#define STATE_DEAD				3
*/</pre>*(Reference Wiki "placeholder")*<!-- Remove this after fill-in -->


---
*Syntaxes:*

[] call `BIS_fnc_reviveOnState`

---
*Example 1:*

```sqf
{ [objNull, 1, _x] call BIS_fnc_reviveOnState; } forEach (curatorSelected select 0);
```