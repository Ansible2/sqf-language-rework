Find the road segments connected to the given road segment.


---
*Syntaxes:*

`roadsConnectedTo` roadSegment

`roadsConnectedTo` [roadSegment, extended]

---
*Example 1:*

```sqf
_road = (player nearRoads 50) select 0;
_connectedRoads = roadsConnectedTo _road;
```

*Example 2:*

```sqf
_road = (player nearRoads 50) select 0;
_connectedRoadsIncPedestrian = roadsConnectedTo [_road, true];
```