Limit the speed of an AI-driven vehicle or AI person to given value. It has continuous effect and AI will not break through the speed limitation until one is contacted, engaged or regrouped.


---
*Example 1:*
```sqf
leader player limitSpeed 5;		// set to walking speed
sleep 30;
leader player limitSpeed -1;	// remove the limit
```

*Example 2:*
```sqf
addMissionEventHandler ["OnEachFrame", { hintSilent format ["myVehicle's speed: %1 km/h", speed myVehicle toFixed 2] }];
sleep 5;
myVehicle limitSpeed 5;
```

*Example 3:*
```sqf
// it was necessary to use limitSpeed repeatedly before Arma 3 1.24
_this setVariable ["speedLimit", 50];
_this spawn {
	while { sleep 0.1; canMove _this } do
	{
		_this limitSpeed (_this getVariable "speedLimit");
	};
};
sleep 10;
_this setVariable ["speedLimit", 100]; // update the speed limit
```