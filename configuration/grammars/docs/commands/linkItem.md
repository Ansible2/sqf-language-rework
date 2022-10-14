Create and assign item to the correct slot. If there is an item in the targeted slot, it gets replaced.


---
*Syntaxes:*

unit `linkItem` item

---
*Example 1:*

```sqf
bluforUnit linkItem "NVGoggles";
opforUnit linkItem "NVGoggles_OPFOR";
independentUnit linkItem "NVGoggles_INDEP";
```