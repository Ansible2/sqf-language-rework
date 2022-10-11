Sets the rotation of a control set as **ST_PICTURE**. Rotation will be done within the control boundaries, so if the X and Y are given off center, the picture may get clipped by the control boundaries. Only requires `ctrlCommit` when fourth parameter is set to `false`. Procedural textures filled controls do not rotate. Supported control types:
* `CT_STATIC`
* `CT_ACTIVETEXT` (Since Arma 3 v2.09.149642)


---
*Example 1:*
```sqf
_control ctrlSetAngle [25, 0.5, 0.5];
```

*Example 2:*
```sqf
with uiNamespace do
{
	ctrl = findDisplay 46 ctrlCreate ["RscPictureKeepAspect", -1];
	ctrl ctrlSetPosition [0,0,1,1];
	ctrl ctrlSetText "A3\Missions_F_Exp\data\Img\lobby\ui_campaign_lobby_background_tablet_radial_left_ca.paa";
	ctrl ctrlCommit 0;
	angle = 0;
	onEachFrame
	{
		with uiNamespace do
		{
			if (angle > 359) then {angle = 0};
			ctrl ctrlSetAngle [angle, 0.5, 0.5];
			angle = angle + 1;
		};
	};
};
```

*Example 3:*
```sqf
_control ctrlSetAngle [25, 0.5, 0.5, false];
_control ctrlCommit 1; // Rotation applies smoothly for 1 second.
```