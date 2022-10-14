Converts position in world space into screen (UI) space. If a specified position is not within the current screen view, an empty array is returned.


---
*Syntaxes:*

`worldToScreen` position

---
*Example 1:*

```sqf
_screenPos = worldToScreen ASLToAGL getPosASL soldier1;
```

*Example 2:*

```sqf
_screenPos = worldToScreen (player modelToWorld [0,10,0]);
```