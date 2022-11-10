Generate Lat and Long fields from [UTM Zone](https://en.wikipedia.org/wiki/Universal_Transverse_Mercator_coordinate_system#UTM_zone), Easting and Northing.
It uses [NAD83 constants](https://en.wikipedia.org/wiki/North_American_Datum).


---
*Syntaxes:*

[easting, northing, zone`, hemisphere`] call `BIS_fnc_posUTMToDeg`

---
*Example 1:*

```sqf
[5273702, 560561, 10] call BIS_fnc_posUTMToDeg;
```