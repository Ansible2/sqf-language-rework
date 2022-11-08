Sets the given effect on the given camera. If you want to switch the screen directly to the first-person, aiming, third-person or group view of an object, use `switchCamera` instead. The effect type "Terminate" is used to exit the current camera view and switch back to the player's view. Does not need `camCommit`.
<br><br>
Since <See GVI Reference 74>, it is possible to terminate individual r2t source. For example:

```sqf
cam cameraEffect ["terminate", "back", "rtt1"]; // would terminate "rtt1" r2t source
cam cameraEffect ["terminate", "back"]; // would terminate all r2t sources
```


---
*Syntaxes:*

camera `cameraEffect` [effectName, effectPosition, r2tName]

---
*Example 1:*

```sqf
_cam cameraEffect ["internal", "BACK"];
```

*Example 2:*

```sqf
_cam cameraEffect ["internal", "back", "rendersurface"];
```

*Example 3:*

```sqf
cam = "seagull" camCreate (player modelToWorld [0,0,100]);
cam cameraEffect ["FIXED", "LEFT TOP"];
cam camCommand "MANUAL ON";
```

*Example 4:*

```sqf
_ctrl = findDisplay 46 createDisplay "RscDisplayEmpty" ctrlCreate ["RscPicture", -1];
_ctrl ctrlSetPosition [0.5, 0, 0.5, 0.5];
_ctrl ctrlSetText "#(argb,512,512,1)r2t(rtt1,1.0)";
_ctrl ctrlCommit 0;
_cam1 = "camera" camCreate (ASLToAGL eyePos player vectorAdd [0, -10, 0]);
_cam1 cameraEffect ["Internal", "Back", "rtt1"];
_cam2 = "Land_HandyCam_F" createVehicle [0,0,0];
_cam2 enableSimulation false;
_cam2 setPos (ASLToAGL eyePos player vectorAdd [0, 10, 0]);
_cam2 setDir (_cam2 getDir player);
switchCamera _cam2;
```