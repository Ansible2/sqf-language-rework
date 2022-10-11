The unit will be forced to fire weapon from the given muzzle. The weapon will not fire if firemode passed as parameter is not supported by the given muzzle. The muzzle could belong to a vehicle weapon and unit in this case will be the unit operating this weapon. Doesnt't seem to work for units in FFV positions. Works on `player`. See also: `BIS_fnc_fire`


---
*Example 1:*
```sqf
_unit forceWeaponFire ["arifle_MX_F", "Single"];
_unit forceWeaponFire ["hgun_ACPC2_F", "hgun_ACPC2_F"];
_unit forceWeaponFire ["HandGrenadeMuzzle","HandGrenadeMuzzle"];
_unit forceWeaponFire ["MiniGrenadeMuzzle","MiniGrenadeMuzzle"];
_unit forceWeaponFire ["HandGrenade_Stone","HandGrenade_Stone"];
_unit forceWeaponFire ["SmokeShellMuzzle","SmokeShellMuzzle"];
_unit forceWeaponFire ["ChemlightGreenMuzzle","ChemlightGreenMuzzle"];
_unit forceWeaponFire ["IRGrenade","IRGrenade"];
_unit forceWeaponFire ["Laserdesignator","Laserdesignator"];
```

*Example 2:*
```sqf
gunner blackfoot forceWeaponFire ["gatling_20mm", "close"];
```