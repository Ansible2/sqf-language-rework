Cuts the given rope to the specified length. If some entity was attached to the end of the rope, it will be detached. The rope remains attached to its parent transport and if the length is set to 0 or even negative does not get destroyed. Use `ropeDestroy` to remove it completely.


---
*Syntaxes:*

`ropeCut` [rope, length]

---
*Example 1:*

```sqf
ropeCut [ropes heli1 select 0, 5];
```