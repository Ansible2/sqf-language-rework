Checks if given object can be stored into soldier's backpack.


---
*Example 1:*
```sqf
if (player canAddItemToBackpack "HandGrenade") then { player addItemToBackpack _item } else { hint "no room!" };
```