Returns the direction object is watching (eyes, or a vehicle primary observer).


---
*Example 1:*
```sqf
Can = "Land_Can_V3_F" createVehicle position player;
onEachFrame {
	Can setPosASL [
		(eyePos player select 0) + (eyeDirection player select 0),
		(eyePos player select 1) + (eyeDirection player select 1),
		(eyePos player select 2) + (eyeDirection player select 2)
	]
};
```

*Example 2:*
Draw AI eye direction (green) and weapon direction (red) in 3D:

```sqf
Bob = createGroup east createUnit ["O_Soldier_F", [0,0,0], [], 0, "NONE"];
Bob setVehiclePosition [player modelToWorld [0,100,0], [], 0, "NONE"];
onEachFrame {
	_beg = ASLToAGL eyePos Bob;
	_endE = (_beg vectorAdd (eyeDirection Bob vectorMultiply 100));
	drawLine3D [ _beg, _endE, [0,1,0,1]];
	_endW = (_beg vectorAdd (Bob weaponDirection currentWeapon Bob vectorMultiply 100));
	drawLine3D [_beg, _endW, [1,0,0,1]];
};
```