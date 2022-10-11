[[Image:distance2D.jpg|400px|right]]
Returns a distance in meters between `Object`s, `Position`s or `Location`s.


---
*Example 1:*
```sqf
_meters = player distance _object;
```

*Example 2:*
```sqf
_meters = player distance [1,2,3];
```

*Example 3:*
```sqf
_meters = [1,2,3] distance [4,5,6];
```

*Example 4:*
```sqf
_meters = position player distance nearestLocation [position player, "hill"];
```