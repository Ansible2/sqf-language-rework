Creates a new map marker at the given position. The marker will be created for every connected player as well as all JIP players. The marker name has to be unique; the command will be ignored if a marker with the given name already exists.


---
*Example 1:*
```sqf
_marker1 = createMarker ["Marker1", position player];
```

*Example 2:*
```sqf
_marker2 = createMarker ["Marker2", player]; // since Arma 3 1.50
```