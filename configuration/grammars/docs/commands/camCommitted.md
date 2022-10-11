Checks if the conduction of the last camCommit call already finished.


---
*Example 1:*
SQS:
<sqs>
; create a camera object
_cam = "camera" camCreate [5600,4800,10]
_cam camSetTarget player
_cam cameraEffect ["internal", "BACK"]
_cam camCommit 0

; smoothly move the camera to its new position in 6 seconds
_cam camSetPos [5680,4720,20]
_cam camCommit 6
@camCommitted _cam

; proceed
</sqs>

*Example 2:*
SQF:

```sqf
_cam = "camera" camCreate [0, 0, 0];
_cam camSetTarget player;
_cam camSetRelPos [0, -5, 10];
_cam cameraEffect ["internal", "back"];
_cam camCommit 0;

waitUntil { camCommitted _cam };

_cam camSetTarget player;
_cam camSetRelPos [90, 25, 10];
_cam cameraEffect ["internal", "back"];
_cam camCommit 5;

waitUntil {camCommitted _cam};

_cam camSetTarget player;
_cam camSetRelPos [-90, -5, 10];
_cam cameraEffect ["internal", "back"];
_cam camCommit 5;
```