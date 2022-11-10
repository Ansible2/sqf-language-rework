Map will zoom on the given area. Function always takes the longer side of the area to zoom on.


---
*Syntaxes:*

[area, center, time, handler, forceCam] call `BIS_fnc_zoomOnArea`

---
*Example 1:*

```sqf
openMap true;
[markerSize "BIS_areaMarker", markerPos "BIS_areaMarker", 5] call BIS_fnc_zoomOnArea;
```