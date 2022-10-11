Sets rain density smoothly over the given transition time. A transition time of zero means an immediate change.
A rain density of zero is no rain, one is maximum rain. Rain is not possible when `overcast` is less than 0.7.

 is `0.5`.


---
*Example 1:*
```sqf
60 setRain 1;
```

*Example 2:*
Force no rain:

```sqf
0 setRain 0;
forceWeatherChange;
999999 setRain 0;
```

*Example 3:*
Snow like effect (Since <See arm Reference 3> v2.08):

```sqf
0 setOvercast 1;
0 setRain 1;
0 setFog 0.1;		// snow affects visibility at distance
setHumidity 0.9;	// don't want to see dust clouds
enableEnvironment [false, true]; // don't want to see snakes and butterflies either
forceWeatherChange;
setRain [
	"a3\data_f\rainnormal_ca.paa",	// rainDropTexture
	1,		// texDropCount
	0.01,	// minRainDensity
	15,		// effectRadius
	0.1,	// windCoef
	2,		// dropSpeed
	0.5,	// rndSpeed
	0.5,	// rndDir
	0.02,	// dropWidth
	0.02,	// dropHeight
	[0.1, 0.1, 0.1, 1],	// dropColor
	0.1,	// lumSunFront
	0.1,	// lumSunBack
	5.5,	// refractCoef
	0.3,	// refractSaturation
	true,	// snow
	false	// dropColorStrong
];
```

*Example 4:*
After 2.10

```sqf
0 setOvercast 1;  
0 setRain 1; 
0 setFog 0.1;  
setHumidity 0.95; 
enableEnvironment [false, true]; 
forceWeatherChange;
[  
	"a3\data_f\snowflake4_ca.paa", // rainDropTexture  
	4, // texDropCount  
	0.01, // minRainDensity  
	25, // effectRadius  
	0.05, // windCoef  
	2.5, // dropSpeed  
	0.5, // rndSpeed  
	0.5, // rndDir  
	0.07, // dropWidth  
	0.07, // dropHeight  
	[1, 1, 1, 0.5], // dropColor  
	0.0, // lumSunFront  
	0.2, // lumSunBack  
	0.5, // refractCoef  
	0.5, // refractSaturation  
	true, // snow  
	false // dropColorStrong  
] 
call BIS_fnc_setRain;
```