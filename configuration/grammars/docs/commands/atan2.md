[[Image:atan.jpg|right|200px]] ArcTangent of `y/x`. Used to determine the angle of a vector `[y,x]`. Result in `Degrees` between -180 and 180.


---
*Syntaxes:*

y [[atan2]] x

---
*Example 1:*

```sqf
_yx = [5,3];
_degrees = (_yx select 0) atan2 (_yx select 1); // 59.0362
```

*Example 2:*

Get direction from _obj1 to _obj2:

```sqf
_vd = getPosASL _obj2 vectorDiff getPosASL _obj1;
_dir = (_vd select 0) atan2 (_vd select 1); // _dir range from -180 to +180
_dir = (_dir + 360) % 360; // _dir range from 0 to 360
```

*Example 3:*

Get relative direction from _obj1 to _obj2:

```sqf
_yx = _obj1 worldToModel getPosASL _obj2;
_dir = (_yx select 0) atan2 (_yx select 1); // _dir range from -180 to +180
_dir = (_dir + 360) % 360; // _dir range from 0 to 360
```