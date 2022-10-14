Returns the provided object's model centre position ([0,0,0]) in `PositionASL`, rather than the transformed `boundingCenter` or [[Oxygen_2_-_Manual#LandContact|LandContact]] vertices.


---
*Syntaxes:*

`getPosWorld` object

---
*Example 1:*

```sqf
_obj setPosWorld getPosWorld _obj;
```

*Example 2:*

```sqf
ATLToASL (_groundObj modelToWorld [0,0,0]) isEqualTo getPosWorld _groundObj; // true
```

*Example 3:*

Wave height under a boat:

```sqf
private _h = ((boat modelToWorld [0,0,0]) vectorDiff getPosWorld boat) select 2;
```