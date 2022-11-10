Function to measure FPS. Spawns code running for given time and displays result on screen `via` `titleText`, `globalChat` `and` `diag_log`.
Variable `BIS_fps_output` is filled with `diag_log` content too.


---
*Syntaxes:*

[duration, sceneId, startDelay] call `BIS_fnc_fps`

---
*Example 1:*

```sqf
private _scriptHandle = [10, "50 units on screen", 3] call BIS_fnc_fps;
```