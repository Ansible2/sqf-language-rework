Creates a `local` marker at the given position - the marker only exists on the machine that created it. The marker name has to be unique, if a marker with the given name exists, the command will be ignored. Use `deleteMarkerLocal` to delete a local marker.<br><br>
If the position is given in 3D format, **z}} coordinate is stored with the marker and will be used when marker is passed to commands like `createVehicle`, `createUnit`, `createAgent`, `createMine`, `setVehiclePosition` for example. However `getMarkerPos` and `markerPos` will always return 0 for {{hl|z**.


---
*Example 1:*
```sqf
_marker = createMarkerLocal ["Marker1", position player];
```