Returns the owner of the first rope - the transport to which other entities are attached with `ropes`. This command is the opposite of `ropeAttachedObjects`. To return all owners see `ropesAttachedTo`.<br><br>
[[Image:ropeAttachedTo.jpg|400px]]


---
*Syntaxes:*

`ropeAttachedTo` cargo

---
*Example 1:*

```sqf
_heli = ropeAttachedTo veh1;
```