Attaches entity to the rope end with optional offset. For detach operation use `ropeDetach`.


---
*Syntaxes:*

[entity, toPoint, ropeEndDownVector] `ropeAttachTo` rope

entity `ropeAttachTo` rope

---
*Example 1:*

```sqf
[veh1, [0,0,0], [0,0,-1]] ropeAttachTo (ropes heli1 select 0);
```