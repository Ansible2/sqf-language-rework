Plays the map animation.


---
*Syntaxes:*

`ctrlMapAnimCommit`  mapControl

---
*Example 1:*

Center map on player:

```sqf
_ctrl ctrlMapAnimAdd [0, 0.05, player];
ctrlMapAnimCommit _ctrl;
```