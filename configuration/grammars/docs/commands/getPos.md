Returns object or location position. If the argument is an object, the return value is in format `PositionAGLS`.<br>
The alternative syntax gets the position given distance and heading away from provided object or position - the command equivalent of `BIS_fnc_relPos`.


---
*Syntaxes:*

`getPos` object

`getPos` location

origin `getPos` [distance, heading]

---
*Example 1:*

```sqf
hintSilent str getPos player;
```

*Example 2:*

`getPos` vs. other methods (over sea). Pay attention to Z values:

```sqf
getPos ship;				// [2412.01, 6036.33, -0.839965]
getPosATL ship;				// [2412.01, 6036.33, 19.4266]
getPosASL ship;				// [2412.01, 6036.33, -0.920066]
getPosASLW ship;			// [2412.01, 6036.33, -0.865981]
visiblePosition ship;		// [2412.02, 6036.33, -0.837952]
visiblePositionASL ship;	// [2412.02, 6036.33, -0.91798]
position ship;				// [2412.01, 6036.33, -0.839965]
```

*Example 3:*

`getPos` vs. other methods (over land, on top of a 100m high building). Pay attention to Z values:

```sqf
getPos car;					// [2508.64, 5681.47, 0.0609589]
getPosATL car;				// [2508.64, 5681.47, 100.0356369]
getPosASL car;				// [2508.64, 5681.47, 171.718]
getPosASLW car;				// [2508.64, 5681.47, 171.718]
visiblePosition car;		// [2508.64, 5681.47, 0.0609512]
visiblePositionASL car;		// [2508.64, 5681.47, 171.718]
position car;				// [2508.64, 5681.47, 0.0609589]
```

*Example 4:*

Find position 100 metres and 45 degrees from player position:

```sqf
player getPos [100, 45];
```

*Example 5:*

Determine if a free-falling unit is close enough to the surface (including buildings, aircraft carriers etc) below to deploy the parachute:

```sqf
waitUntil { sleep 1; getPos player select 2 < 200 };
hint "Deploying a parachute might be a good idea";
```