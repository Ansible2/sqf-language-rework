Joins the unit to the given group, if position id is available, this one is used.


---
*Example 1:*
```sqf
player joinAs [_group, 4];
```

*Example 2:*
To get the position id:

```sqf
getUnitPositionId = {
	private ["_vvn", "_str"];
	_vvn = vehicleVarName _this;
	_this setVehicleVarName "";
	_str = str _this;
	_this setVehicleVarName _vvn;
	parseNumber (_str select [(_str find ":") + 1])
};
player joinAs [createGroup west, 5];
_id = player call getUnitPositionId;
hint str _id; // 5
```