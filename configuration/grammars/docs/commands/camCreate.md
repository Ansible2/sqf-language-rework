Create a camera or a seagull object on the given position. The creation happens immediately and doesn't wait for `camCommit`.<br>
Among other commands, `cameraEffect` must be used to enter the camera's view and `camDestroy` to delete the created camera. See also `Camera Control`.


---
*Syntaxes:*

type `camCreate` position

---
*Example 1:*

```sqf
_cam = "camera" camCreate (ASLToAGL eyePos player);
```

*Example 2:*

```sqf
_flr = "flare" camCreate (position _myPlane); // works too
```