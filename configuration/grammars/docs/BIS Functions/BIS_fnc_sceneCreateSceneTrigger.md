Create trigger for scene which can interrupt scene with name passed during creating the trigger. Scene name is saved in format `BIS_SceneIntDetector%1` where %1 is sceneName.


---
*Syntaxes:*

[sceneName, side, timeout, triggerSize, triggerPosition] call `BIS_fnc_sceneCreateSceneTrigger`

---
*Example 1:*

```sqf
["BIS_scene", west, 5, 500, [1337,1337,0], false] call BIS_fnc_sceneCreateSceneTrigger;
```