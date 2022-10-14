Sets the position of an object relative to the terrain.


---
*Syntaxes:*

object `setPosATL` pos

---
*Example 1:*

```sqf
player setPosATL [getPosATL player select 0, (getPosATL player select 1) - 10, getPosATL player select 2];
```