Returns `Array` of `Strings` where elements are the names of model animations, which should theoretically be available for use with `animate` command. However in practice this depends on whether animation is also made available for use in scripts via config.


---
*Example 1:*
```sqf
_names = animationNames static_AT;
``` Returns: ["MainTurret", "MainGun", "MainTurret_destructX", "MainTurret_destructY", "MainTurret_destructZ", "MainGun_destructX", "MainGun_destructY", "MainGun_destructZ", "magazine_destruct", "ammo_belt_destruct", "bolt_destruct", "charging_handle_destruct", "damagehideVez_destruct", "damagehideHlaven_destruct", "damagehideRecoil_destruct", "Turret_shake", "Turret_shake_aside", "Magazine_hide", "Ammo_belt_hide", "muzzleFlash", "AddAutonomous_unhide", "bullet001_reload_hide", "bullet002_reload_hide", "bullet003_reload_hide", "bullet004_reload_hide", "bullet005_reload_hide", "bullet006_reload_hide", "bullet007_reload_hide", "bullet008_reload_hide"]