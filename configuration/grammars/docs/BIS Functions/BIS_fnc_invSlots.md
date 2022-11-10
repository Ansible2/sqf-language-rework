Returns config inventory slots of given unit (total numbers of available slots in array).


---
*Syntaxes:*

[object] call `BIS_fnc_invSlots`

---
*Example 1:*

```sqf
[ player ] call BIS_fnc_invSlots;//Returns [1,1,1,8,12,1,0,12] for "B_T_Recon_TL_F" class. Means: 1 x WeaponSlotPrimary, 1 x WeaponSlotHangun, ... , 12 x WeaponSlotInventory
```