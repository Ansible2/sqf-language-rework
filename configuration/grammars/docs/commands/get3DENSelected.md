Returns an array of all selected `Eden Editor Entities` of the given type.<br>
If a wrong type is provided, **`], [], [], [], [], [`** is returned and an error message is shown.


---
*Syntaxes:*

[[get3DENSelected]] type

---
*Example 1:*

```sqf
get3DENSelected "";

/*
[
	[B Alpha 2-1:1],				// objects
	[B Alpha 2-1],					// groups
	[164494: <no shape>],			// triggers
	[<No center> Charlie 1-2:4],	// logic
	[[B Alpha 2-1,0]],				// waypoints
	["Hotel_Whiskey"]				// markers
]
*/
```

*Example 2:*

```sqf
get3DENSelected "object"; // [B Alpha 2-1:1]
```