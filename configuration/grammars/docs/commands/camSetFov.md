Set the zoom level (`F`ield `O`f `V`iew) of the given camera.
<br>
The zoom level is from `**0.01}}` for the nearest and `{{hl|8.5}}` for the furthest zoom value, with a default zoom level of `{{hl|0.75**`
<br>
The angle of the field of view is `**atan(FOV)*2**` radians when in 4:3 aspect ratio. Needs the call of `camCommit` to be conducted.


---
*Example 1:*
```sqf
_cam camSetFov 0.75;
```