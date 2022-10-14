Returns the corpse associated with given weaponholder. When unit is killed and had a weapon, the weapon is placed inside "WeaponHolderSimulated" and dropped together with the unit. This command returns the dead body associated with this weaponholder.


---
*Syntaxes:*

`getCorpse` weaponholder

---
*Example 1:*

```sqf
systemChat str getCorpse cursorObject;
```