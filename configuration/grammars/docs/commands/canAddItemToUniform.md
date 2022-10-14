Checks if given object can be stored into soldier's uniform.


---
*Syntaxes:*

unit `canAddItemToUniform` item

unit `canAddItemToUniform` [item, count]

---
*Example 1:*

```sqf
_item = "HandGrenade";
_fits = player canAddItemToUniform _item;
if (_fits) then {
	player addItemToUniform _item;
} else {
	hint "no room!";
};
```