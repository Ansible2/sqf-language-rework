Returns vehicle sensors' threats.


---
*Syntaxes:*

`getSensorThreats` vehicle

---
*Example 1:*

```sqf
private _dangers = getSensorThreats vehicle player;
/*
	returns e.g
	[
		[164230: titan_missile_atl_fly.p3d, "missile", "visual"],
		[164233: titan_missile_atl_fly.p3d, "threatmissile", "radar"]
	]
*/
```