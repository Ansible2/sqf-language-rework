Draws an icon on the map. This command needs to be called every frame, preferably using the `onDraw` UI Event Handler. Some useful icons can be found in <sqf inline>configfile >> "CfgVehicleIcons"
```.


---
*Syntaxes:*

map `drawIcon` [texture, color, position, width, height, angle, text, shadow, textSize, font, align]

---
*Example 1:*

Red icon with text:

```sqf
findDisplay 12 displayCtrl 51 ctrlAddEventHandler ["Draw", {
	_this select 0 drawIcon [
		"iconStaticMG", // Custom images can also be used: getMissionPath "\myFolder\myIcon.paa"
		[1,0,0,1],
		getPosASLVisual player,
		24,
		24,
		getDirVisual player,
		"Player Vehicle",
		1,
		0.03,
		"TahomaB",
		"right"
	]
}];
```

*Example 2:*

Green text only:

```sqf
findDisplay 12 displayCtrl 51 ctrlAddEventHandler ["Draw", {
	_this select 0 drawIcon [
		"#(rgb,1,1,1)color(1,1,1,1)",
		[0,1,0,1],
		player,
		0,
		0,
		0,
		name player
	]
}];
```