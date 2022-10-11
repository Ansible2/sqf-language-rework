Smoothly change the fog over given time (in seconds). See also `fogParams`.


---
*Example 1:*
```sqf
15 setFog 0.5;
```

*Example 2:*
Force no fog:

```sqf
0 setFog 0;
// forceWeatherChange; // change is immediate
999999 setFog 0;
```

*Example 3:*
```sqf
0 setFog [1, 0.01, 0];
```

*Example 4:*
Mountain fog, starts from 70m ASL and thickens more the higher you climb:

```sqf
0 setFog [1, -1, 70];
```

*Example 5:*
Valley fog, starts from 60m ASL and thickens more the lower you descend: 
```sqf
0 setFog [1, 1, 60];
```

*Example 6:*
Fooooog on the waaaater: 
```sqf
0 setFog [1, 1, 0];
```