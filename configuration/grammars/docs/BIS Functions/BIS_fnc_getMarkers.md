Returns markers in format PREFIX_N where PREFIX_ is the provided argument and N is an integer between 1 and 128. If there are 128 markers but marker 123 is missing, then only the first 122 marker will be returned.


---
*Syntaxes:*

[markerPrefix] call `BIS_fnc_getMarkers`

---
*Example 1:*

```sqf
["BIS_marker_"] call BIS_fnc_getMarkers; // ["BIS_marker_1","BIS_marker_2",...]
```