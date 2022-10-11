Return object's normalized direction vector in world space (**[x,y,z]**) in render time scope. 
* A unit facing North would return **[0,1,0]**
* A unit facing East would return **[1,0,0]**
* A unit facing South would return **[0,-1,0]**
* A unit facing West would return **[-1,0,0]**


---
*Example 1:*
```sqf
_dirVector = vectorDirVisual _unit;
```