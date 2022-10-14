Prepares the camera field of view (zoom). The default zoom level is 0.75, 0.01 is the nearest and 2 the furthest zoom value. The angle of the field of view is `atan(FOV)*2` radians when in 4:3 aspect ratio. Needs the call of `camCommitPrepared` to be conducted.


---
*Syntaxes:*

camera `camPrepareFov` fieldOfView

---
*Example 1:*

```sqf
_camera camPrepareFov 0.1;
```