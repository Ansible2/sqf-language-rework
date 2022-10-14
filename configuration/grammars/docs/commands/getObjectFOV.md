Returns Field of View of the given object in `rad`ians. Static objects return default value, which is 1.
FOV of `objNull` is 0.
Object FOV is indirectly connected with optics magnification or player view zoom, the narrower the angle the greater the zoom.


---
*Syntaxes:*

`getObjectFOV` object

---
*Example 1:*

```sqf
private _objFOV = getObjectFOV player;
```

*Example 2:*

```sqf
private _objFOVinDegrees = deg getObjectFOV cursorObject;
```

*Example 3:*

Perceived distance to an object:

```sqf
private _vdist = (player distance _obj) * (getObjectFOV player / 0.75);
```