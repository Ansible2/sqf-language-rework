Sets the path to follow for AI driver. Note that `unitReady` will return `true` even if AI is still driving through the points.<br>
Using any other `move` command (e.g <sqf inline>_vehicle move getPosATL _vehicle</sqf>) or `doStop` will stop the effect of this command.


---
*Example 1:*
```sqf
myVehicle setDriveOnPath [getMarkerPos "wp1", getMarkerPos "wp2"];
```

*Example 2:*
```sqf
private _points = allMapMarkers apply { getMarkerPos _x; }; // getting all marker positions
{ _x pushBack 15; } forEach _points; // setting speed
myVehicle setDriveOnPath _points;
```