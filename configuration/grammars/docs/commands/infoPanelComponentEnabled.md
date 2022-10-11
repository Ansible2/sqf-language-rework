Controls availability of component to given object info panel.


---
*Example 1:*
```sqf
// returns true if specific component "SensorDisplay" is enabled on player vehicle's left panel
_state = [vehicle player, [-1]] infoPanelComponentEnabled ["VehicleSystemsDisplayManagerComponentLeft", "SensorDisplay"];
```

*Example 2:*
```sqf
// returns true if all "SensorsDisplayComponent" components are enabled on player vehicle's left panel, otherwise returns false
_state = [vehicle player, [-1]] infoPanelComponentEnabled ["VehicleSystemsDisplayManagerComponentLeft", "SensorsDisplayComponent"];
```