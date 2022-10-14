Returns a list of targets within the defined range. "Targets" are not restricted to enemy units.


---
*Syntaxes:*

unit `nearTargets`  range

---
*Example 1:*

```sqf
player nearTargets 100;
// can return e.g
/*
	[
		[[2555.33,2535.33,1.32708],"SoldierEB",EAST,214222,EAST 1-1-A:1],
		[[2550.39,2482.5,1.32696],"SoldierWB",WEST,0,WEST 1-1-A:2]
	]
*/
```