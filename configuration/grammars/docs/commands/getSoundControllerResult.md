Returns the calculated value of `simple expression` defined in config. Config could be any config entry, even ` mission config` entry. It is more important that the vehicle is a transport and not any object. If the expression contains sound controllers, the controller values will be taken from the given vehicle.


---
*Example 1:*
```sqf
_result = (vehicle player) getSoundControllerResult (configFile >> "cfgVehicles" >> typeOf (vehicle player) >> "sounds" >> "idle_ext" >> "volume");
```

*Example 2:*
```sqf
// mission config entry to reverse rain strength:
// myExpression = "rain factor [1,0]";
_result = "PaperCar" createVehicleLocal position player getSoundControllerResult (missionConfigFile >> "myExpression");
```