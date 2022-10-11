Sets a guided missile target. Does not work for all types of missiles. If the target is dead, it is ignored. The target has to be inside the missile's configured targeting cone for the command to work.


---
*Example 1:*
```sqf
missile1 setMissileTarget tank1;
```

*Example 2:*
```sqf
_missile = createVehicle ["Missile_AGM_01_F",player modelToWorld [0,0,50],[],0,"CAN_COLLIDE"];
_missile setDir getDir player;
_tgt = createVehicle ["O_APC_Wheeled_02_rcws_v2_F",player modelToWorld [0,300,0],[],0,"CAN_COLLIDE"];
_tgt setVehicleTiPars [1,1,1];
[_missile,_tgt] spawn {
	params ["_missile","_tgt"];
	sleep 0.1;
	_missile setMissileTarget _tgt;
};
```