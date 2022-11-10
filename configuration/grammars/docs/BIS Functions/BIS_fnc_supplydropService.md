<pre>
/*
	File: supplydropService.sqf

	Description:
	Supply drop service - controls approach and departure of transporting air vehicle and actual cargo drop. Used by Supply drop support request.

	Parameter(s):
	1: <object> unit allowed to use the transport system
	2: <object> vehicle providing transport
	4: <array> positions to be cosen by player; accepted strings are "pickup" and "unload", the second position is defined by the next paramter (OPTIONAL)
	5: <position> (NEEDED ONLY IF PARAMETER #4 IS USED)

	Returns:
	N/A
*/

//MP framework init (used for move command given to transporter vehicle)
*(Reference Wiki "placeholder")*


---
*Syntaxes:*

<!-- [] call `BIS_fnc_supplydropService` -->

---
*Example 1:*

<!-- 
```sqf
[] call BIS_fnc_supplydropService;
``` -->