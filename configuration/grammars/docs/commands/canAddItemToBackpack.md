Checks if given object can be stored into soldier's backpack.


---
*Syntaxes:*

unit `canAddItemToBackpack` item

unit `canAddItemToBackpack` [item, count]

---
*Example 1:*

```sqf
if (player canAddItemToBackpack "HandGrenade") then { player addItemToBackpack _item } else { hint "no room!" };
```