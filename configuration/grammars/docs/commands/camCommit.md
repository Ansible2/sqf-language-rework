Smoothly conduct the changes that were assigned to a camera within the given time. If the time is set to zero, the changes are done immediately. For **camPrepareXXX** commands use `camCommitPrepared`.


---
*Example 1:*
`SQS Syntax`:
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
`SQF Syntax`:

```sqf
private "_cam";

// create a camera object
_cam = "camera" camCreate [position player select 0, position player select 1, 2];
_cam camSetTarget player;
_cam cameraEffect ["internal", "BACK"];
_cam camCommit 0;

// smoothly move the camera to its new position in 6 seconds
_cam camSetPos [position player select 0, (position player select 1) + 10, 20];
_cam camCommit 6;
waitUntil { camCommitted _cam; };
```