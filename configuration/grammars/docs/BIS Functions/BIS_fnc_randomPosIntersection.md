Returns random 2D position inside the intersection of two circles. [-1,-1] is returned if the circles do not intersect.


---
*Syntaxes:*

[firstCircle, secondCircle, positioning1, positioning2] call `BIS_fnc_randomPosIntersection`

---
*Example 1:*

```sqf
[trigger1, trigger2, 0.75, 0.75] call BIS_fnc_randomPosIntersection;
```