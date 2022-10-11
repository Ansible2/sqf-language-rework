Preloads all textures, materials and proxies needed to render given object. Works with objects and classnames - note that classnames require an object instance in the mission.


---
*Example 1:*
```sqf
[] spawn 
{
	waitUntil { 10 preloadObject "SoldierW" };
	hint "Preload finished";
};
```

*Example 2:*
```sqf
[] spawn 
{
	waitUntil { 10 preloadObject leader player };
	hint "Preload finished";
};
```