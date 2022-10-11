Returns an array with subarrays contains class names and also names of connected items of all the vehicle's cargo weapons in `weaponsItems` format. If weapon has no magazine, an empty array [] is returned instead of magazine info. If the argument is a vehicle with weapons, vehicles cargo is searched, unlike with `weaponsItems` command, which will return vehicle's weapons instead. 
* Since Arma 3 v1.96 the returned array always contains secondary muzzle magazine info and consistent with `getUnitLoadout` format for weapon items.


---
*Example 1:*
```sqf
weaponsItemsCargo vehicle player;
```

*Example 2:*
```sqf
weaponsItemsCargo _weaponholder;
```