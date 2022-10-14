Returns the state of game simulation. Simulation can get paused by pressing <See Controls Reference Tab> or a system dialog opening (e.g. <See Controls Reference c> menu).
Simulation will not get paused if **-noPause** [[Arma 3: Startup Parameters|startup parameter]] is used.


---
*Syntaxes:*

`isGamePaused`

---
*Example 1:*

```sqf
onEachFrame 
{
	if (isGamePaused) exitWith {};
	// ...do stuff
};
```