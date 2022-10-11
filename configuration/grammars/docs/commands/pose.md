Returns the pose of the given unit. It can be one of:
{{Columns|3|
* **"Dead"**
* **"Weapon"** (special weapon - AT)
* **"BinocLying"**
* **"LyingNoWeapon"**
* **"Lying"**
* **"HandGunLying"**
* **"Crouch"**
* **"HandGunCrouch"**
* **"Combat"**
* **"HandGunStand"**
* **"Stand"**
* **"Swimming"**
* **"BottomSwimming"**
* **"SurfaceSwimming"**
* **"Diving"**
* **"BottomDiving"**
* **"SurfaceDiving"**
* **"NoWeapon"** (civilian moves)
* **"Binoc"** (binocular pose)
* **"BinocStand"** (binocular pose (weapon on back))
* **"Healing"**
* **"Dragged"**
* **"Carrying"**
* **"Freefall"**


---
*Example 1:*
```sqf
if (pose player == "SurfaceSwimming") then { hint "How's water?" };
```