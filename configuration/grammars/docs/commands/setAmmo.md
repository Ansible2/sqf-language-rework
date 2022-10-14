Sets custom ammo count in the currently loaded magazine of the specified weapon or muzzle.


---
*Syntaxes:*

unit `setAmmo` [weaponOrMuzzle, count]

---
*Example 1:*

Set player's handgun magazine ammo count to 10 rounds:

```sqf
player setAmmo [handgunWeapon player, 10];
```

*Example 2:*

Set player's current weapon magazine ammo count to 1 round:

```sqf
player setAmmo [currentWeapon player, 1];
```

*Example 3:*

If player is a gunner in a vehicle, set current weapon magazine ammo count to 5 rounds:

```sqf
if (local vehicle player) then {
	vehicle player setAmmo [currentWeapon vehicle player, 5];
} else {
	hint "Vehicle must be local to this machine for 'setAmmo' to work";
};
```

*Example 4:*

If you try to set more ammo than the magazine can hold, it will be clipped at default magazine capacity:

```sqf
player setAmmo [primaryWeapon player, 1000000]; // full mag with default ammo count
```

*Example 5:*

Some weapons has more than one muzzles:

```sqf
_marshall setAmmo ["autocannon_40mm_CTWS", 0];// won't work
_marshall setAmmo ["HE", 0];// works
```