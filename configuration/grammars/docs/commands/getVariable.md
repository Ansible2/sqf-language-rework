Returns the value of variable in the variable space assigned to various data types.
All available data types combinations:


---
*Example 1:*
```sqf
private _variable = myTruck getVariable "myVariable"; // returns nil if "myVariable" is not set
```

*Example 2:*
```sqf
private _variable = myTruck getVariable ["myVariable", 50]; // returns 50 if "myVariable" is not set
```

*Example 3:*
```sqf
for "_i" from 0 to 5 do
{
	_car = missionNamespace getVariable ("car" + str _i);
	_car setDamage 0;
}; // Set damage of car0..car5 to 0
```

*Example 4:*
```sqf
myMissionVar = 2015;
missionNamespace getVariable "myMissionVar"; // returns 2015
```

*Example 5:*
Get current value of a variable and if it is undefined, define it and get the defined value:

```sqf
private _var = missionNamespace getVariable "varName";
if (isNil "_var") then
{
	missionNamespace setVariable ["varName", 123];
	_var = 123;
};
// _var here will contain current value of the variable varName
```