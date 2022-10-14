Returns the incapacitated sub-state of the given unit, when the `lifeState` of the unit is "INCAPACITATED". Could be one of:
* "UNCONSCIOUS"
* "MOVING"
* "SHOOTING"


---
*Syntaxes:*

`incapacitatedState` person

---
*Example 1:*

```sqf
_result = incapacitatedState player;
```