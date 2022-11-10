Set object textures.


---
*Syntaxes:*

[object, textures] call `BIS_fnc_setObjectTexture`

---
*Example 1:*

```sqf
[player, "#(rgb,8,8,3)color(0,0,1,1)"] call BIS_fnc_setObjectTexture;
```

*Example 2:*

```sqf
[
	vehicle player,
	[
		"#(rgb,8,8,3)color(1,0,0,1)",
		"#(rgb,8,8,3)color(0,1,0,1)",
		"#(rgb,8,8,3)color(0,0,1,1)"
	]
] call BIS_fnc_setObjectTexture;
```
identical to:

```sqf
vehicle player setObjectTexture [0, "#(rgb,8,8,3)color(1,0,0,1)"];
vehicle player setObjectTexture [1, "#(rgb,8,8,3)color(0,1,0,1)"];
vehicle player setObjectTexture [2, "#(rgb,8,8,3)color(0,0,1,1)"];
```