Assigns existing item from inventory (uniform, vest, backpack) to a correct slot. If the slot is occupied by another item, it gets replaced.


---
*Example 1:*
```sqf
bluforUnit addItem "NVGoggles";
bluforUnit assignItem "NVGoggles";
opforUnit addItem "NVGoggles_OPFOR";
opforUnit assignItem "NVGoggles_OPFOR";
independentUnit addItem "NVGoggles_INDEP";
independentUnit assignItem "NVGoggles_INDEP";
```