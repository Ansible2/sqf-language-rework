<pre>/*

	Description:
	Disable respawn until players of only one side (including its allies) remains, then respawn everyone at once.
	When "Rounds" respawn is used by only one side, wait until all its players are dead.

	Parameter(s):
		BOOL - true to force round end
		SIDE - use any side to return side affected by round system (based on description.ext respawnTemplates settings)
		ARRAY - empty array to return if a round is still on (players of more than one involved faction are alive)
*/</pre>

*(Reference Wiki "placeholder")*


---
*Syntaxes:*

<!-- [] call `BIS_fnc_respawnRounds` -->

---
*Example 1:*

<!-- 
```sqf
[] call BIS_fnc_respawnRounds;
``` -->