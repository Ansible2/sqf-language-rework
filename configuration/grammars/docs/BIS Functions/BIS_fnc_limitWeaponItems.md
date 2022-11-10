Keeps or remove unit's weapon attachments based on probability user sets. Apply for primary, secondary or handgun weapon separately.


---
*Syntaxes:*

[unit,mode,chanceOptics,chanceAttach,chanceMuzzle,chanceUnderbarrel] call `BIS_fnc_limitWeaponItems`

---
*Example 1:*

```sqf
player call BIS_fnc_limitWeaponItems;
```

*Example 2:*

```sqf
[ [player, 0, 25, 50, 75, 100 ] ]  call BIS_fnc_limitWeaponItems;
```

*Example 3:*

```sqf
[ [player, 0, ["optic_lrps",100], ["acc_pointer_ir",100], ["muzzle_snds_B",100], ["bipod_01_F_blk",100] ] ]  call BIS_fnc_limitWeaponItems;
```