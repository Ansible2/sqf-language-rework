Create a task.


---
*Syntaxes:*

[owner, taskID, description, destination, state, priority, showNotification, type, visibleIn3D] call `BIS_fnc_taskCreate`

---
*Example 1:*

```sqf
[civilian, "task1", ["Do this and you get a cookie", "Earn Cookie", "cookiemarker"], [0,0,0], "ASSIGNED", 2, true] call BIS_fnc_taskCreate;
```

*Example 2:*

```sqf
[west, ["subtask", "task1"], ["Good luck finding this cookie", "Find Cookie", "cookiemarker2"], objNull, 1, 3, true] call BIS_fnc_taskCreate; // Task without a map location
```

*Example 3:*

in `Description.ext`
```cpp
class CfgTaskTypes
{
	class my_CfgTaskType
	{
		displayname = "Tank";
		icon = "Tank_MCO.paa";
		icon3D = "Tank_MCO.paa";
	};
};
```
SQF:

```sqf
[east, ["taskType_"], ["Setting taskType", "The simple way", "marker2"], objNull, 1, 3, true, "my_CfgTaskType"] call BIS_fnc_taskCreate; // Task with a custom icon
```