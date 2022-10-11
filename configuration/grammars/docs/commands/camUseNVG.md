Set / clear using of night vision during cutscenes. This command only works with `camCreate` created camera that is currently the main camera for the player (see example).


---
*Example 1:*
```sqf
camUseNVG true;
```

*Example 2:*
```sqf
setDate [2000,12,31,0,0];
_cam = "camera" camCreate [0,0,0];
_cam camSetTarget player;
_cam camSetRelPos [0,-5,3];
_cam cameraEffect ["Internal","Back"];
_cam camCommit 0;
camUseNVG true;
```