Returns the state of game simulation. Simulation can get paused by pressing *(Reference Controls "Tab" at Alt)* or a system dialog opening (e.g. *(Reference Controls "Esc")* menu).
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