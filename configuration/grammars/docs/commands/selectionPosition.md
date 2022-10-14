Returns selection position in model space pertaining to the current animation in `render time scope`.
When the default syntax is used, command searches first in Memory `LOD`, then in Geometry LOD, FireGeometry LOD, LandContact LOD, HitPoints LOD and finally in ViewGeometry LOD and returns the first matching find.
The second syntax allows to specify which one of these LODs to search in instead.


---
*Syntaxes:*

object `selectionPosition` selectionName

object `selectionPosition` [selectionName, LOD, returnMode]

`selectionPosition` [object, selectionName, LODIndex, isVisual, returnMode]

---
*Example 1:*

```sqf
_inModelPosition = player selectionPosition "head_hit";
```

*Example 2:*

```sqf
_inModelPosition = player selectionPosition "pelvis";
```

*Example 3:*

```sqf
_inModelPosition = player selectionPosition "head";
```

*Example 4:*

```sqf
_inModelPosition = player selectionPosition "camera";
```

*Example 5:*

```sqf
stomper selectionPosition ["wheel_1_1", "HitPoints", "FirstPoint"];	// [-0.774058,0.860854,-1.40365]
stomper selectionPosition ["wheel_1_1", "HitPoints", "AveragePoint"];	// [-0.597142,1.35486,-1.58345]
stomper selectionPosition ["wheel_1_1", "HitPoints", "BoundingBox"];	// [[-0.774058,0.860854,-2.07746],[-0.420225,1.84887,-1.08944]]
```