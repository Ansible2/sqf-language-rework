Sets a polyline marker's path. Works only on the computer that executes this command.


---
*Syntaxes:*

marker `setMarkerPolylineLocal` path

---
*Example 1:*

Changes **"marker_1"** into a polyline and draws a sine curve on your position:

```sqf
"marker_1" setMarkerShape "polyline";
private _return = [] ;

for "_i" from 0 to 100 step 0.1 do
{
	_return pushBack (_i + getPos player#0);
	_return pushBack ((sin (_i*10))*10 + getPos player#1);
} ;

"marker_1" setMarkerPolylineLocal _return;
```