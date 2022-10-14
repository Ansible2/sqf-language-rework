Returns an array of the sensors in the given vehicle's config (configFile >> "CfgVehicles" >> `vehicle` >> "Components" >> "SensorsManagerComponent" >> "Components").


---
*Syntaxes:*

`listVehicleSensors` vehicle

---
*Example 1:*

```sqf
private _sensors = listVehicleSensors _v44blackfish;
hint str _sensors;
/*
	e.g for a V44 Blackfish:
	[
		["IRSensorComponent", "IRSensorComponent"],
		["VisualSensorComponent", "VisualSensorComponent"],
		["ActiveRadarSensorComponent", "ActiveRadarSensorComponent"],
		["PassiveRadarSensorComponent", "PassiveRadarSensorComponent"],
		["LaserSensorComponent", "LaserSensorComponent"],
		["NVSensorComponent", "NVSensorComponent"]
	]
*/
```