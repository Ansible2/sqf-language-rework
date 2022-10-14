Sets an area or target to be tracked by the object airplane or helicopter [[A3_Targeting_config_reference#class_pilotCamera|pilotCamera]]. 
To track an object the vehicle has to have appropriate sensors ([[A3_Targeting_config_reference#CfgVehicles|scanners]]) that can detect the given target type.
Using `objNull` will unlock the camera


---
*Syntaxes:*

object `setPilotCameraTarget` target

---
*Example 1:*

```sqf
_pilotCamTrack = vehicle player setPilotCameraTarget [2100,4200,4.2];
```

*Example 2:*

```sqf
_pilotCamTrack = vehicle player setPilotCameraTarget BIS_Edita;
```