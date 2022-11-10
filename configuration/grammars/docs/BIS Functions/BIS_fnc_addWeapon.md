Adds a weapon to the specified unit, with magazine classnames taken from the weapon's config (in `CfgWeapons`).
This function does not remove magazines nor weapons prior to adding the new weapon, so that still has to be done manually.


---
*Syntaxes:*

[unit, weaponClassName, quantity, type] call `BIS_fnc_addWeapon`

---
*Example 1:*

Add 6 dual-purpose magazines and the underwater gun to the player:

```sqf
[player, "arifle_SDAR_F", 6] call BIS_fnc_addWeapon;
```

*Example 2:*

Adds 2 &times; 30 Rnd Stanag Tracer (Red) magazines to bluforUnit, with an Mk20_F:

```sqf
[bluforUnit, "arifle_Mk20_F", 2, 1] call BIS_fnc_addWeapon;
```

*Example 3:*

Alternative syntax of second example, with magazine name written out:

```sqf
[bluforUnit, "arifle_Mk20_F", 2, "30Rnd_556x45_Stanag_Tracer_red"] call BIS_fnc_addWeapon;
```