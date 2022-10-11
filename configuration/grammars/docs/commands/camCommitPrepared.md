Smoothly conducts the changes that were assigned to a camera within the given time. If the time is set to zero, the changes are done immediately. This command is for use with **camPrepareXXX** commands. For the normal cam command use `camCommit`.


---
*Example 1:*
```sqf
// Create a camera object
_cam = "camera" camCreate [5600,4800,10];
_cam camPrepareTarget player;
_cam cameraEffect ["internal", "BACK"];
_cam camCommitPrepared 0;
// Smoothly move the camera to its new position in 6 seconds
_cam camPreparePos [5680,4720,20];
_cam camCommitPrepared 6;
waitUntil {camCommitted _cam};
// Proceed
```