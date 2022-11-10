Convert latitude/longtitude coordinates into game world position.<br>
World config `must` contain following settings to convert the position correctly:
```cpp
// Required for scripting
mapSize = 61440;	// Can differ from mapArea size, as ingame world can be resized
mapZone = 10;		// UTM zone
mapArea[] = {		// lon/lat coordinates (not in UTM to assure .kml precision)
	-122.754367782585,47.3272454065969,	// Bottom Left
	-121.930117859276,47.8753494907418	// Top Right
};
```


---
*Syntaxes:*

[longitude, latitude, world] call `BIS_fnc_posDegToWorld`

---
*Example 1:*

```sqf
[47.63959,-122.127249] call BIS_fnc_posDegToWorld;
```