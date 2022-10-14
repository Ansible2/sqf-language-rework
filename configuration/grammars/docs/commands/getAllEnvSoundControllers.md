Returns an array containing the names and values of environmental 2D sound controllers, variables that can be used in simple expressions when configuring sounds.


---
*Syntaxes:*

`getAllEnvSoundControllers` position

---
*Example 1:*

```sqf
getAllEnvSoundControllers position player;
/*
	returns e.g
	[
		["rain",0],
		["night",0],
		["windy",0.161588],
		...
	]
*/
```