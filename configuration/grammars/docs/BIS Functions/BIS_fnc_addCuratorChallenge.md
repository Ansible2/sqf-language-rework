<pre>/*

	Description:
	Add challenges for curator to complete

	Parameter(s):
		0: OBJECT - curator
		1 (Optional): ARRAY - list of supported challenges from CfgCuratorChallenges (default: all challenges)
		2 (Optional): NUMBER - number of added challenges (default: 3)
		3 (Optional): CODE - condition for challenges to remain active {default: true}
		4 (optional):
			CODE or [CODE,STRING] - code executed upon completing all challenges and reward description
			Arguments passed to the code are:
				0: OBJECT - curator
				1: NUMBER - number of previously completed challenges by given curator
				2: STRING - parent task ID
		5 (Optional): STRING - parent task ID

	Returns:
	STRING - ID of parent task under which all challenge tasks are
*/</pre>

*(Reference Wiki "placeholder")*


---
*Syntaxes:*

<!-- [] call `BIS_fnc_addCuratorChallenge` -->

---
