Order the given unit to fire on the given target (via the radio).
If the target is `objNull`, the unit is ordered to fire on its current target (set with `doTarget` or `commandTarget`).


---
*Syntaxes:*

unitName `commandFire` target

---
*Example 1:*

```sqf
_ESoldier1 commandFire _WSoldier1;
```