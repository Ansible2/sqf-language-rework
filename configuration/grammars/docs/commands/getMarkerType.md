Gets type of marker. See `CfgMarkers` for a list of standard markers.


---
*Syntaxes:*

`getMarkerType`  markerName

---
*Example 1:*

```sqf
if (getMarkerType "Marker1" == "") then { hint "Marker1 is not an icon!" };
```