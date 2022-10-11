Process an animation of the object. If `animate` uses class name from `CfgModels` `Animations`, `animateSource` uses name defined by the `source` property. AnimationSources can animate multiple `animate` Animations. AnimationSource is defined in `CfgVehicles`' `AnimationSources` (see [[Arma 3: createVehicle/vehicles]]).


---
*Example 1:*
```sqf
house animateSource ["Door_1_source", 1, true];
```

*Example 2:*
Create UGV and manipulate its turret (Not possible to do with `animate` command. See [[Arma 3: createVehicle/vehicles]] for reference)

```sqf
ugv = "B_UGV_01_F" createVehicle (player getRelPos [5, 0]);
ugv addAction ["Show Turret",
{
	ugv animateSource ["Turret", 0];
	ugv animateSource ["MainTurret", rad 0, true];
	ugv animateSource ["MainGun", rad 0, true];
}];
ugv addAction ["Hide Turret",  { ugv animateSource ["Turret", 1] }];
ugv addAction ["Turret Left",  { ugv animateSource ["MainTurret",  rad 90] }];
ugv addAction ["Turret Right", { ugv animateSource ["MainTurret", -rad 90] }];
ugv addAction ["Turret Up",    { ugv animateSource ["MainGun",  rad 30] }];
ugv addAction ["Turret Down",  { ugv animateSource ["MainGun", -rad 20] }];
```

*Example 3:*
```sqf
barGate animateSource ["Door_1_sound_source", 1]; // Open
barGate animateSource ["Door_1_sound_source", 0]; // Close
```

*Example 4:*
Open/close Bar Gate automatically:

```sqf
// Bar Gate init
if (isServer) then
{	
	private _gateTrigger = createTrigger ["EmptyDetector", getPosWorld this, false];
	_gateTrigger setVariable ["BarGateObj", this];
	_gateTrigger setTriggerActivation ["ANYPLAYER", "PRESENT", true];
	_gateTrigger setTriggerArea [5, 25, getDir this, true];
	_gateTrigger setTriggerStatements 
	[
		"this",
		"thisTrigger getVariable 'BarGateObj' animateSource ['Door_1_sound_source', 1]",
		"thisTrigger getVariable 'BarGateObj' animateSource ['Door_1_sound_source', 0]"
	];
};
```