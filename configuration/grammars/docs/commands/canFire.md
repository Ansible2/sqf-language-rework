Returns `true` if the given vehicle is still able to fire. For the command to return `true`, vehicle must be alive, have weapon operator and the weapon cannot be damaged &ge; 0.9 but can be empty due to running out of ammo. If mission starts with vehicle having no ammo or `setVehicleAmmo` 0 command is executed on the vehicle, then `canFire` will always report `false` for it.


---
*Example 1:*
```sqf
if (not canFire _tank) then
{
	player sideChat "Tank disabled!";
};
```