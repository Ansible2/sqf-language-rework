<pre>
/*******************************************************************************
 *
 *	version: 		1.0
 *	name:			Task handler
 *	description:	automatically sets tasks as current 	
 *	parameters:		_this select 0: a unit whose tasks will be handled (Array)
 					_this select 1: links to tasks created via MP Framwork with
 									priorities (loewr number means higher
 									priority)
 *	return value:	none 	
 * 	example:	 	[
 						BIS_cooper,
						[
							["objShaftoe",   		1],
							["objGorka",			3],
							["objNikolayev",		5],
							["objLagushina",   		5],
							["objSmugglers",   		5],
							["objFindBase",    		4],
							["objSentries",   		3],
							["objLeader",			3],
							["objDestroyBase",		3],
							["objEscortLagushina",	1],
							["objRescueCrew",   	2],
							["objSafehouse",    	3],
							["objMaksim",    		6],
							["objEvidence",    		7]
						]
					] call BIS_fnc_taskHandler

 *	TODO:			* generalize so it can be used in WF
 					* add support for standard tasks
 					* randomize the selection of tasks with the same priority
*(Reference Wiki "placeholder")*


---
*Syntaxes:*

<!-- [] call `BIS_fnc_taskHandler`; -->

---
