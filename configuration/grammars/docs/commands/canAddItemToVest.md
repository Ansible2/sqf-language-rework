Checks if given object can be stored into soldier's vest.


---
*Example 1:*
```sqf
_item = "HandGrenade";
private _fits = player canAddItemToVest _item;
if (_fits) then {
	player addItemToVest _item;
} else {
	hint "no room!";
};
```