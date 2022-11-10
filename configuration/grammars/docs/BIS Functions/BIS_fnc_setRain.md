A helper function for setting `rainParams` in multiplayer. The call to the function could be placed in `init.sqf` to sync `rainParams` between all clients and JIP. Alternatively execute on server.


---
*Syntaxes:*

rainParams `call` `BIS_fnc_setRain`

---
*Example 1:*

```sqf
0 setOvercast 1;
0 setRain 1;
0 setFog 0.1;						// snow affects visibility at distance
setHumidity 0.9;					// don't want to see dust clouds
enableEnvironment [false, true];	// don't want to see snakes and butterflies either
forceWeatherChange;
[
	"a3\data_f\rainnormal_ca.paa",	// rainDropTexture
	1,								// texDropCount
	0.01,							// minRainDensity
	15,								// effectRadius
	0.1,							// windCoef
	2,								// dropSpeed
	0.5,							// rndSpeed
	0.5,							// rndDir
	0.02,							// dropWidth
	0.02,							// dropHeight
	[0.1, 0.1, 0.1, 1],				// dropColor
	0.1,							// lumSunFront
	0.1,							// lumSunBack
	5.5,							// refractCoef
	0.3,							// refractSaturation
	true,							// snow
	false							// dropColorStrong
] call BIS_fnc_setRain;
```