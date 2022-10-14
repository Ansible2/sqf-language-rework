Adds a weapon into the cargo space of a vehicle / box with given attachments / magazines. Ignores available cargo space. If the weapon class has any pre-attached items (LinkedItems), they are removed and new items, supplied via command arguments, are added.


---
*Syntaxes:*

container `addWeaponWithAttachmentsCargo` [weaponConfiguration, weaponsCount]

---
*Example 1:*

```sqf
cursorObject addWeaponWithAttachmentsCargo [["arifle_MX_GL_F", "muzzle_snds_H", "", "optic_aco", ["30Rnd_65x39_caseless_mag", 15], ["3Rnd_HE_Grenade_shell", 2], ""], 2];
```

*Example 2:*

Add five MX GL rifles, each with flashlight side attachment, a full 30 rounds magazine loaded into the gun and a full 3Rnd HE grenade magazine loaded into the grenade launcher:

```sqf
cursorObject addWeaponWithAttachmentsCargo [["arifle_MX_GL_F", "", "acc_flashlight", "", ["30Rnd_65x39_caseless_mag", 30], ["3Rnd_HE_Grenade_shell", 2], ""], 5];
```

*Example 3:*

Add one MX rifle without any attachments or magazines event though the class has linked items:

```sqf
cursorObject addWeaponWithAttachmentsCargo [["arifle_MX_Holo_pointer_F", "", "", "", [], [], ""], 1];
```

*Example 4:*

Add all weapons on player with attachments:

```sqf
{ cursorObject addWeaponWithAttachmentsCargo [_x, 1] } forEach weaponsItems player;
```