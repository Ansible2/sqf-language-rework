Preloads the scene for the prepared camera with given timeout after which preloading is aborted. Max timeout is 30 seconds. Timeout of 0 means max timeout of 30 seconds as well.


---
*Syntaxes:*

camera `camPreload` timeout

---
*Example 1:*

```sqf
_camera camPreload 5;
```

*Example 2:*

Preload camera around player to avoid stuttering on optics zooming:

```sqf
[] spawn 
{
	_cam = "camera" camCreate (player selectionPosition "camera");
	for "_i" from 0 to 359 do
	{
		_cam setDir _i;
		_cam camPrepareFov 0.25;
		_cam camPreload 0;
		waitUntil { camPreloaded _cam };
	};
	camDestroy _cam;
};
```