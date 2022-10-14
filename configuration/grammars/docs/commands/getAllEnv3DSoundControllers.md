Returns an array containing the names and values of environmental 2D sound controllers, variables that can be used in simple expressions when configuring sounds.


---
*Syntaxes:*

[[getAllEnv3DSoundControllers]] object

---
*Example 1:*

```sqf
getAllEnv3DSoundControllers _thatTreeOverThere;
/*
	returns e.g
	[
		["rain",0],
		["night",0],
		["wind",0.161588],
		...
	]
*/
```