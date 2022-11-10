<pre>
/*******************************************************************************
 *	version: 	1.0
 *	name:		create sound entities	
 *	description:	creates sound entities(logic objects) and attaches to 
 *			an objects passed as parameter     
 *			After scene end it will detach and delete all created 
 *			sound entities (if scene was executed from scenes
 *			controller.
 *			 	
 *	paramater:	objects - ARRAY of OBJECTS in format without "BIS_" 
 *			prefix. For example, if you have BIS_Cooper in mission 
 *			than parameter will be [Cooper]. Then you can use 
 *			created sound entities as BIS_ZvukCooper say "something"    
 *						 	
 *	return value:	nothing 	
 * 
</pre>
*(Reference Wiki "placeholder")*


---
*Syntaxes:*

<!-- [] call `BIS_fnc_sceneCreateSoundEntities` -->

---
*Example 1:*

<!-- 
```sqf
[] call BIS_fnc_sceneCreateSoundEntities;
``` -->