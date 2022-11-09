Draws an icon at the given position in the game world. This command has to be executed every frame. Use the [[Arma 3: Mission Event Handlers#Draw3D|Draw3D]] Mission Event Handler (which is executed every frame if the user can see the icon).<br>
In order for the results of this command to be visible through a `custom camera`, enable HUD with `cameraEffectEnableHUD`.<br>
<sqf inline>showHUD false
``` will hide the icon drawn by this command.<br>
In order for arrows to appear, the icon texture should exist. The arrow size is proportionate to the icon size.


---
*Syntaxes:*

[[drawIcon3D]] [texture, color, position, width, height, angle, text, shadow, textSize, font, textAlign, drawSideArrows, offsetX, offsetY]

---
*Example 1:*

Icon and text:

```sqf
addMissionEventHandler ["Draw3D", {
	drawIcon3D ["targetIcon.paa", [1,1,1,1], ASLToAGL getPosASLVisual cursorTarget, 1, 1, 45, "Target", 1, 0.05, "TahomaB"];
}];
```

*Example 2:*

Just text:

```sqf
addMissionEventHandler ["Draw3D", {
	drawIcon3D ["", [1,0,0,1], ASLToAGL getPosASLVisual cursorTarget, 0, 0, 0, "Target", 1, 0.05, "PuristaMedium"];
}];
```

*Example 3:*

```sqf
iconPos = player getPos [10, 0] vectorAdd [0,0,2];
addMissionEventHandler ["draw3D", 
{
	drawIcon3D 
	[
		"\a3\ui_f\data\IGUI\Cfg\Radar\radar_ca.paa",
		[0,0,1,1],
		iconPos,
		5,
		5,
		getDirVisual player,
		"COMPASS",
		0,
		0.3,
		"PuristaMedium",
		"center",
		true
	];
}];
```

*Example 4:*

Since *(Reference GVI "arma3|2.04")*

```sqf
pos = player getPos [10, 0] vectorAdd [0,0,2];
addMissionEventHandler ["draw3D", 
{
	_k = 10 / (player distance pos);
	drawIcon3D 
	[
		"\a3\ui_f\data\IGUI\Cfg\Radar\radar_ca.paa", 
		[1,0,0,1], 
		pos,
		1 * _k, 
		1 * _k, 
		0, 
		name player, 
		0, 
		0.04 * _k, 
		"RobotoCondensed",
		"right", 
		true, 
		0.005 * _k,  
		-0.035 * _k
	];
}];
```