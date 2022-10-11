Sets the orientation of the given camera in the direction of the given vector. Needs `camCommit`.


---
*Example 1:*
Since <See arm Reference 3>:

```sqf
private _pos1 = player modelToWorld [0, 5, 5];
private _pos2 = player modelToWorld [0, 50, 50];

private _cam = "camera" camCreate _pos1;
_cam cameraEffect ["INTERNAL", "BACK"];

_cam camSetPos _pos2;
_cam camSetDir (_pos2 vectorFromTo _pos1);
_cam camCommit 5;
waitUntil { camCommitted _cam };

_cam camSetPos _pos1;
_cam camCommit 5;
```

*Example 2:*
Before <See arm Reference 3>:

```sqf
private _pos1 = player modelToWorld [0, 5, 5];
private _pos2 = player modelToWorld [0, 50, 50];

private _cam = "camera" camCreate _pos1;
_cam cameraEffect ["INTERNAL", "BACK"];

_cam camSetPos _pos2;
_cam camSetDir 180;
_cam camCommit 5;
waitUntil { camCommitted _cam };

_cam camSetPos _pos1;
_cam camCommit 5;
```