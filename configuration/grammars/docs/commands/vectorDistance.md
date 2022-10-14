Returns [Euclidean distance](https://en.wikipedia.org/wiki/Euclidean_distance) between two points.


---
*Syntaxes:*

point1 `vectorDistance` point2

---
*Example 1:*

```sqf
_euclideanDist = getPosASL player vectorDistance [0,0,0];
```

*Example 2:*

```sqf
(getPosASL _a) vectorDistance (getPosASL _b);
// same as
(getPosATL _a) distance (getPosATL _b);
```