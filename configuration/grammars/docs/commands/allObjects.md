Returns array of requested objects as fast as the engine allows it. The objects can be requested by object type and simulation kind.


---
*Syntaxes:*

objectType `allObjects` objectCollection

---
*Example 1:*

```sqf
private _visitorBuildings = 1 allObjects 0;
```

*Example 2:*

```sqf
private _userPlacedBuildings = 8 allObjects 0;
```

*Example 3:*

```sqf
onEachFrame
{
	hintSilent str
	[
		count (63 allObjects 0),
		count (63 allObjects 1),
		count (63 allObjects 2),
		count (63 allObjects 3),
		count (63 allObjects 4),
		count (63 allObjects 5),
		count (63 allObjects 6)
	];
};
```