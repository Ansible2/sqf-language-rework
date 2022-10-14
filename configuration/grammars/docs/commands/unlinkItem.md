Unassign and delete existing item from its assigned slot. If item does not exist or is not in the assigned slot, command simply fails.


---
*Syntaxes:*

unit `unlinkItem` item

---
*Example 1:*

```sqf
bluforUnit unlinkItem "NVGoggles";
opforUnit unlinkItem "NVGoggles_OPFOR";
independentUnit unlinkItem "NVGoggles_INDEP";
```