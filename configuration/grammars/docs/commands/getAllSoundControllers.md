Returns an array containing names and values of the sound controllers that can be used in simple expressions when configuring sounds.


---
*Syntaxes:*

`getAllSoundControllers` vehicle

---
*Example 1:*

```sqf
getAllSoundControllers vehicle player;
/*
	returns e.g
	[
		["rpm",0],
		["randomizer",0.874332],
		["speed",0],
		["thrust",0],
		...
	]
*/
```