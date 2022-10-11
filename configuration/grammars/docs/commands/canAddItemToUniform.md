Checks if given object can be stored into soldier's uniform.


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