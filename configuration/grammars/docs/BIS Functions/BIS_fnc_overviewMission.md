<pre>#define CONTROL_SHOW(CONTROL) \
	CONTROL ctrlshow true; \
	CONTROL ctrlsetfade 0; \
	CONTROL ctrlcommit 0;

#define CONTROL_HIDE(CONTROL) \
	CONTROL ctrlshow false; \
	CONTROL ctrlsetfade 1; \
	CONTROL ctrlcommit 0;

*(Reference Wiki "placeholder")*


---
*Syntaxes:*

<!-- [] call `BIS_fnc_overviewMission` -->

---
*Example 1:*

<!-- 
```sqf
[] call BIS_fnc_overviewMission;
``` -->