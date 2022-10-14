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
* "Border" (A2/A3 only)
* "SolidBorder" (OA/A3 only)


---
*Syntaxes:*

markerName `setMarkerBrushLocal` brush

---
*Example 1:*

```sqf
"Marker1" setMarkerBrushLocal "DiagGrid";
```