Returns the captive state of the given unit (set with `setCaptive`). A captive unit will not be attacked by its enemies.


---
*Syntaxes:*

`captive` object

---
*Example 1:*

```sqf
if (captive _general) then { removeAllWeapons _general; };
```