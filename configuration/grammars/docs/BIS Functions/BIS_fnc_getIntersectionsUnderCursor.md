Returns intersections under cursor. For more information see `lineIntersectsSurfaces`.


---
*Syntaxes:*

[screenX, screenY, ignoreObj1, ignoreObj2, sortMode, maxResults, LOD1, LOD2] call `BIS_fnc_getIntersectionsUnderCursor`

---
*Example 1:*

```sqf
[0.5, 0.5, player, objNull, true, "VIEW"] call BIS_fnc_getIntersectionsUnderCursor;
```