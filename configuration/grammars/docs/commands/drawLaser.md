Draws a laserbeam and a lightpoint at the impact location of the laser.<br>
This command has to be executed every frame - see <See HashLink Reference Draw3D>.<br>
Lasers drawn with this command are subject to the same limitations as weapon attachment lasers. These limitations are defined in the **CfgIRLaserSettings** config class.


---
*Syntaxes:*

`drawLaser` [position, direction, beamColor, dotColor, dotSize, beamThickness, beamMaxLength, isIR]

---
*Example 1:*

Give the player a laser eye:

```sqf
addMissionEventHandler ["Draw3D", {
	drawLaser [
		eyePos player vectorAdd [0, 0, 0.1],
		getCameraViewDirection player,
		[1000, 0, 0], // Bright red
		[],
		5,
		20,
		-1,
		false
	];
}];
```