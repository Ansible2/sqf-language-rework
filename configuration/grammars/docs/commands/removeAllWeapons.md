Removes all weapons and magazines from the given unit. Does not remove items like map, compass, radio (see `removeWeapon` for this).<br>
Doesn't quite work with vehicles. If you need to remove all weapons from a vehicle, remove each weapon individually (see `removeWeapon`).


---
*Example 1:*
```sqf
removeAllWeapons player;
```