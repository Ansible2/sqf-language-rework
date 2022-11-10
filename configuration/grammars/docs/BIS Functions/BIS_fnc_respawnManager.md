<pre>
/*******************************************************************************
	Version:	2.0
	Name:		Respawn manager
	DESCRIPTION:	All checkpoints must be markers with name prefix BIS_checkpointnr  
	PARAMETERS:	1) function called - string, list of functions:
				- Init
				- Destroy
				- AddCheckpoint
				- RemoveCheckpoint			
			2) parameter for the function
			For more information see https://wiki.bistudio.com/index.php/RespawnManager
	RETURNED VALUE: depends on the function called
	
	TODO:		-performance: add markers positions to the array instead of the testing 
			their positions every loop in _CheckNearestCheckpoint function - DONE
			-pridat funkci GetActualCheckpoint(character) - DONE 
			-osetrit pripad, kdy postava neexistuje (je prave v respawnu/zahynula) - NEPOTREBUJEME
			-typy markeru podle modu: normal/debug - DONE
			-optional parameter marker name - DONE
			-optional prefix marker name as a parameter to the Init procedure
			-add functionality for 3 parameters function call - DONE
			-vlastni lokalni checkpointy(markery) pro hratelne postavy(AddCheckpoint/RemoveCheckpoint)
*******************************************************************************/</pre>

*(Reference Wiki "placeholder")*


---
*Syntaxes:*

<!-- [] call `BIS_fnc_respawnManager` -->

---
*Example 1:*

<!-- 
```sqf
[] call BIS_fnc_respawnManager;
``` -->