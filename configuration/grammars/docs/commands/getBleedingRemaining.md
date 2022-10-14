Returns how many seconds injured unit will continue leaving blood trail. If unit damage is < 0.1, the return value is 0 and unit doesn't leave any blood trail. Use `setBleedingRemaining` to set different remaining time.


---
*Syntaxes:*

`getBleedingRemaining` unit

---
*Example 1:*

```sqf
_bleedingRemaining = getBleedingRemaining _unit;
```