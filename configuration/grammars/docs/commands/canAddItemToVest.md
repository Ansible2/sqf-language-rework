Checks if given object can be stored into soldier's vest.


---
*Syntaxes:*

unit `canAddItemToVest` item

unit `canAddItemToVest` [item, count]

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