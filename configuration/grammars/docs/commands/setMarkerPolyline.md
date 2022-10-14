Sets a polyline marker's path.


---
*Syntaxes:*

marker `setMarkerPolyline` path

---
*Example 1:*

Changes **"marker_1"** into a polyline and draws a sine curve on `player`'s position:

```sqf
// createMarker ["marker_1", [0,0,0]];
"marker_1" setMarkerShape "polyline";
private _return = [] ;

for "_i" from 0 to 100 step 0.1 do
{
	_return pushBack (_i + getPosASL player # 0);
	_return pushBack ((sin (_i * 10)) * 10 + getPosASL player # 1);
} ;

"marker_1" setMarkerPolyline _return;
```