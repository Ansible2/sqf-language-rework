Returns the given or currently selected weapon state for unit or vehicle. With syntax 2, if no optional arguments are present, currently selected weapon is queried.


---
*Syntaxes:*

`weaponState` unit

`weaponState` [vehicle, turretPath, weapon, muzzle, firemode]

unit `weaponState` weaponOrMuzzle

---
*Example 1:*

```sqf
_wsPlayer = weaponState player;					// ["arifle_MXC_ACO_F","arifle_MXC_ACO_F","Single","30Rnd_65x39_caseless_mag",30,0,0]
```

*Example 2:*

Query currently selected gunner weapon:

```sqf
_wsVehicle = weaponState [_apc, [0]];			// ["autocannon_40mm_CTWS","HE","player","60Rnd_40mm_GPR_Tracer_Red_shells",60,0,0]
```

*Example 3:*

```sqf
_wsVehicle = weaponState [_apc, [0], "AP"];	// ["autocannon_40mm_CTWS","AP","player","40Rnd_40mm_APFSDS_Tracer_Red_shells",40,0,0]
```

*Example 4:*

```sqf
_wsPlayer = player weaponState "GL_3GL_F"; 		// ["arifle_MX_GL_ACO_F","GL_3GL_F","Single","1Rnd_HE_Grenade_shell",1,0,0]
```