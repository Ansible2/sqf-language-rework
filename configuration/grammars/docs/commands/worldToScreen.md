Converts position in world space into screen (UI) space. If a specified position is not within the current screen view, an empty array is returned.
{{Feature | informative | `SafeZone`s should be considered:
* the result can be out of the [0,0]..[1,1] range
* the result can be a filled array even if the position is not displayed on screen if it would appear on a triplescreen setup


---
*Example 1:*
```sqf
_screenPos = worldToScreen ASLToAGL getPosASL soldier1;
```

*Example 2:*
```sqf
_screenPos = worldToScreen (player modelToWorld [0,10,0]);
```