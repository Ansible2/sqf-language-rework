Moves the marker. If position is given in 3D format, **z** coordinate is stored with the marker and will be used when marker is passed to commands like `createVehicle`, `createUnit`, `createAgent`, `createMine`, `setVehiclePosition` for example. When `Object` is used for position, its `getPosWorld` is used.


---
*Syntaxes:*

markerName `setMarkerPosLocal` pos

---
*Example 1:*

```sqf
"MarkerOne" setMarkerPosLocal getMarkerPos "MarkerTwo";
```