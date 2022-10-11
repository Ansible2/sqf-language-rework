Executes a command on the given `camera / actor` object. Known commands:


---
*Example 1:*
```sqf
_camera camCommand "manual on";
```

*Example 2:*
```sqf
private _camera = "CamCurator" camCreate [0,0,0];
_camera camCommand "maxPitch 89";
_camera camCommand "minPitch -89";
_camera camCommand "speedDefault 0.1";
_camera camCommand "speedMax 2";
_camera camCommand "ceilingHeight 5000";
_camera camCommand "atl off";
_camera camCommand "surfaceSpeed off";
```