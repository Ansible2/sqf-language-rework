Returns the `position` of a location. If the location is attached to an object, that object's position is returned.


---
*Syntaxes:*

`locationPosition` location

---
*Example 1:*

```sqf
_locationPos = locationPosition myLocation;
```

*Example 2:*

```sqf
_location = nearestLocation [getPos player, "nameCity"];
_locationPos = locationPosition _location;
```