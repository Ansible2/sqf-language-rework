Returns the direction that the vehicle weapon is aiming in. For addons the weapon name must be an entry in `CfgWeapons`.


---
*Syntaxes:*

vehicleName `weaponDirection` weaponName

---
*Example 1:*

```sqf
_weaponVectorDir = player weaponDirection currentWeapon player;
```

*Example 2:*

Draw AI eye direction (green) and weapon direction (red) in 3D:

```sqf
bob = createGroup east createUnit ["O_Soldier_F", [0,0,0], [], 0, "NONE"];
bob setVehiclePosition [player modelToWorld [0,100,0], [], 0, "NONE"];
onEachFrame
{
	_beg = ASLToAGL eyePos bob;
	_endE = _beg vectorAdd (eyeDirection bob vectorMultiply 100);
	drawLine3D [_beg, _endE, [0,1,0,1]];
	_endW = _beg vectorAdd (bob weaponDirection currentWeapon bob vectorMultiply 100);
	drawLine3D [_beg, _endW, [1,0,0,1]];
};
```