Checks if there are intruders during scene. All intruders during scene will be disabled if they 
   will get into the detector trigger. Checking is deactivated by passing 
```sqf
BIS_sceneIntruderDetectorLogic setVariable ["_detectInProgress", false];
```


---
*Syntaxes:*

[sceneCenter, triggerSize] call `BIS_fnc_sceneIntruderDetector`

---
*Example 1:*

```sqf
`1337,1337,0],[42,42` call BIS_fnc_sceneCreateSceneTrigger;
```