[[Image:Boundingbox.jpg|right|200px]] Returns a bounding box of given object in model coordinate space, adjusted according to destruction/animation of an object. This command is rather generous on the size estimation, for more precise coordinates use `boundingBoxReal`.


---
*Example 1:*
```sqf
private _box = boundingBox _abrams;
```

*Example 2:*
```sqf
hint str (0 boundingBox cursorObject);
```