Creates new item and tries to add it into inventory. Inventory must have enough space to accomodate new item or command will fail.The item can also be a weapon or a magazine.


---
*Example 1:*
```sqf
// identical to bluforUnit linkItem "NVGoggles"
// addItem then assignItem makes the item go through through inventory storage and fail if storage space was missing
bluforUnit addItem "NVGoggles";
bluforUnit assignItem "NVGoggles";

opforUnit addItem "NVGoggles_OPFOR";
opforUnit assignItem "NVGoggles_OPFOR";

independentUnit addItem "NVGoggles_INDEP";
independentUnit assignItem "NVGoggles_INDEP";
```