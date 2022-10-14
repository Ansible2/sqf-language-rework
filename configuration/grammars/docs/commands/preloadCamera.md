Preload all textures and models around given `Position` to avoid visual artifacts after camera is moved.

Should be used before any abrupt camera change/cut.

Returns true once all data is ready. See `camPreload` for alternative, more flexible camera preloading.


---
*Syntaxes:*

`preloadCamera` position

---
*Example 1:*

```sqf
waitUntil {preloadCamera markerPos "cam_location_2"};
```