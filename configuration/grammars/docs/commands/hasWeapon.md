Checks if a unit has the given weapon in hands or on back/in holster. Weapons inside unit containers such as vest and backpack are not counted.


---
*Example 1:*
```sqf
if !(player hasWeapon "arifle_MX_ACO_pointer_F") then { player addWeapon "arifle_MX_ACO_pointer_F" };
```