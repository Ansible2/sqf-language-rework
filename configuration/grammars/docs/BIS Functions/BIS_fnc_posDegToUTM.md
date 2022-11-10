Generate a [UTM Zone](https://en.wikipedia.org/wiki/Universal_Transverse_Mercator_coordinate_system#UTM_zone), Easting and Northing from lat and long fields.
It uses [NAD83 constants](https://en.wikipedia.org/wiki/North_American_Datum).


---
*Syntaxes:*

[longitude, latitude`, zone`] call `BIS_fnc_posDegToUTM`

---
*Example 1:*

```sqf
private _utmZone = [47.63959,-122.127249] call BIS_fnc_posDegToUTM;
```