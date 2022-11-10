<pre>
/*******************************************************************************
	Version:		0.1
	Name:			Instructor Figure
	DESCRIPTION:	www.  
	PARAMETERS:		1) function called - string, list of functions:
						- Init
						- Destroy
					2) parameter for the function
					For more information see https://wiki.bistudio.com/index.php/A3_InstructorFigure
	RETURNED VALUE:	depends on the function called
	
	TODO:	        + PlayTopic
					+ Fade out New Intel text
					+ wait for TAB press
					+ use functions for dynamic text
					- kbTell support
						- logging
						+ rework data structure (add, remove, search)
						- ContainerExists function
			        + display only if difficulty is low
					+ disableSerialization
					+ GetTopics should return array, not just debuglog info
					+ deny play more than one topic in a time
					+ Localize
					+ check and fix return values of functions
					+ correct debuglog information
					- deny addtopic during playing
					+ safe work with BIS_GroupCommunication - dont overwrite user menus
					+ remove INSTRUCTOR FIGURE from BIS_GroupCommunication  
					+ PlayTopicRandom - rule exceeding selection of a previous sentence
*******************************************************************************/

//Variables
*(Reference Wiki "placeholder")*


---
*Syntaxes:*

<!-- [] call `BIS_fnc_instructorFigure` -->

---
*Example 1:*

<!-- 
```sqf
[] call BIS_fnc_instructorFigure;
``` -->