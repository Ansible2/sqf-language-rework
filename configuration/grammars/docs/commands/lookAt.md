Control what the unit(s) is/are looking at (target or `Position`). If target is used, it will get revealed fully.


---
*Example 1:*
```sqf
_someSoldier lookAt _otherSoldier;
```

*Example 2:*
```sqf
[_someSoldier, _otherSoldier] lookAt markerPos "markerOne";
```

*Example 3:*
```sqf
hint "R U N !";
BFG = "B_AAA_System_01_F" createVehicle position player;
createVehicleCrew BFG;
t = time + 10;
onEachFrame
{
	BFG lookAt (unitAimPosition player vectorAdd (velocity player vectorMultiply 0.2));
	if (time > t && alive player) then
	{
		[BFG,"weapon_Cannon_Phalanx",[0]] call BIS_fnc_fire;
	};
};
```