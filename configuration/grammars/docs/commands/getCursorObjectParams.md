Returns object and named selections under cursor and distance to object's surface (to the point cursor points at). If object surface is further away than 50 meters, selections are always an empty array and distance is 1e10 (10^10).


---
*Syntaxes:*

`getCursorObjectParams`

---
*Example 1:*

```sqf
hint str getCursorObjectParams;
```