Set the target object or position where the given camera should point at. Needs the call of `camCommit` to be conducted. To reset the target use `objNull`.


---
*Example 1:*
```sqf
_camera camSetTarget player;
```

*Example 2:*
```sqf
_camera camSetTarget [2540,1503,26];
```

*Example 3:*
```sqf
_cam = "camera" camCreate (player modelToWorld [0, 100, 10]);
_cam camSetTarget player;
_cam camSetRelPos [0, 0.5, 1.5];
_cam cameraEffect ["internal", "back"];
_cam camCommit 1;
player setRandomLip true;
```