Sets the status of an objective that was defined in `briefing.html`.

Status may be one of:
* "ACTIVE"
* "FAILED"
* "DONE"
* "HIDDEN"

To refer to an objective that is named "OBJ_1", for example, use only the index number in this command (i.e. "1" objStatus "HIDDEN").


---
*Example 1:*
```sqf
"1" objStatus "DONE";
``` 
Marks the objective named "OBJ_1" as completed.