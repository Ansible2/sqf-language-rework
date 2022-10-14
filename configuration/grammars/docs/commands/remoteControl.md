Switches on remote control of the unit. Command needs to be executed locally to the player.
If driver is remote it will get transferred to players PC.


---
*Syntaxes:*

who `remoteControl` whom

---
*Example 1:*

Set player remote control of driver:

```sqf
player remoteControl driver UAV;
driver UAV switchCamera "Internal"; // switchCamera required
// sometimes switchCamera is not needed
player remoteControl driver UAV;
```

*Example 2:*

Return control to player: 
```sqf
objNull remoteControl driver UAV;
```

*Example 3:*

A dirty hack to return controlling unit because of the absence of dedicated getter:

```sqf
SQF_fnc_remoteControlledBy =
{
	params ["_obj"];
	if (!isNull objectParent _obj) exitWith { UAVControl _obj select 0 };
	private _res = [objNull];
	isNil
	{
		private _pos = getPosWorld _obj;
		private _dirUp = [vectorDirVisual _obj, vectorUpVisual _obj];
		private _anim = animationState _obj;
		private _dummy = "PaperCar" createVehicleLocal [0,0,0];
		_obj moveInAny _dummy;
		_res = uavControl _dummy;
		_obj setPosWorld _pos;
		_obj setVectorDirAndUp _dirUp;
		_obj switchMove _anim;
		deleteVehicle _dummy;
	};
	_res select 0
};
```
Usage (could be scheduled or unscheduled):

```sqf
[] spawn
{
	player remoteControl bob;
	systemChat str (bob call SQF_fnc_remoteControlledBy); // B Alpha 1-1:1 (KK)
	objNull remoteControl bob;
	systemChat str (bob call SQF_fnc_remoteControlledBy); // <NULL-object>
};
```