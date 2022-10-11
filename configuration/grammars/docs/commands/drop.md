Creates a particle effect.
This command is used to create smoke, fire and similar effects.
The particles are single polygons with single textures that always face the player.
They can be set to dynamically change their position, size, direction, can be set to different weights and to be more or less dependent on the wind.


---
*Example 1:*
```sqf
drop ["cl_basic", "", "Billboard", 1, 1,
	[-3.5 * (sin (direction xural)), -3.5 * (cos (direction xural)), 0],
	[random 0.1, random 0.1, random 0.5],
	1, 0.005, 0.0042, 0.7, [0.3,3],
	[[0.5,0.5,0.5,0], [0.7,0.7,0.7,0.5], [0.9,0.9,0.9,0]],
	[0,1,0,1,0,1],
	0.2, 0.2, "", "", xural];
```