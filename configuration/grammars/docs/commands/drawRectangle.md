Draws a rectangle on the map.<br> [[Image:drawRectangle.jpg|250px]]


---
*Syntaxes:*

map `drawRectangle`  [centre, halfWidth, halfHeight, angle, color, fill]

---
*Example 1:*

```sqf
_ctrl drawRectangle [
	getPos player,
	20,
	20,
	getDir player,
	[0,0,1,1],
	""
];
```

*Example 2:*

```sqf
_ctrl drawRectangle [
	player,
	10,
	20,
	getDir player,
	[1,1,1,1],
	"#(rgb,8,8,3)color(1,0,0,1)"
];
```