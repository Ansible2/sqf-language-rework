Returns an array containing all information about current client screen resolution.

 for undistorted image if the FOV is custom. Some of the common values:


---
*Example 1:*
```sqf
private _res = getResolution;
```
Example result with a single 16:9 monitor:

```sqf
[
	1920,		// width
	1080,		// height
	792,		// 2D viewport width
	594,		// 2D viewport height
	1.77778,	// aspect ratio
	0.55,		// UI scale
	0.75,		// fovTop
	1.33333,	// fovLeft
	false		// tripleHead
]
```
Example result with a triple 16:9 monitor setup:

```sqf
[
	5760,		// width
	1080,		// height
	792,		// 2D viewport width
	594,		// 2D viewport height
	5.33333,	// aspect ratio
	0.55		// UI scale
]
```
Example result on a dedicated server:

```sqf
[
	160,		// width
	120,		// height
	136,		// 2D viewport width
	102,		// 2D viewport height
	1.33333,	// aspect ratio
	0.85		// UI scale
]
```