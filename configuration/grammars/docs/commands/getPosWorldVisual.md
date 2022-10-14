Returns the provided object's, model centre position in render version in format `PositionASL`, rather than transformed `boundingCenter` or [[Oxygen_2_-_Manual#LandContact|LandContact]] vertices.


---
*Syntaxes:*

`getPosWorldVisual` object

---
*Example 1:*

```sqf
_obj setPosWorld getPosWorldVisual _obj;
```

*Example 2:*

```sqf
_groundObj modelToWorldVisualWorld [0,0,0] isEqualTo getPosWorldVisual _groundObj; // true
```

*Example 3:*

```sqf
private _waveHeight = ((boat modelToWorldVisual [0,0,0]) vectorDiff getPosWorldVisual boat) select 2;
```