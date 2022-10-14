Selects the fill texture for the marker ("RECTANGLE" or "ELLIPSE"). Brush is the name of the subclass in CfgMarkerBrushes.
<br>
<br>
`brush` can be:
* "Solid"
* "SolidFull" (A3 only)
* "Horizontal"
* "Vertical"
* "Grid"
* "FDiagonal"
* "BDiagonal"
* "DiagGrid"
* "Cross"
* "Border"  (Not present in A1)
* "SolidBorder"  (Not present in A1)


---
*Syntaxes:*

markerName `setMarkerBrush` brush

---
*Example 1:*

```sqf
"Marker1" setMarkerBrush "DIAGGRID";
```