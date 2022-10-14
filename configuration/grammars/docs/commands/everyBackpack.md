Returns array of backpacks stored in given crate or vehicle. Used for accessing backpack content of a backpack on ground.


---
*Syntaxes:*

`everyBackpack` box

---
*Example 1:*

```sqf
everyBackpack cursorTarget;
```

*Example 2:*

```sqf
_vehicleBackpacks = everyBackpack vehicle player;
```