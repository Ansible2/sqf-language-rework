Returns array with all items assigned to the `handgunWeapon` except magazines. Use `handgunMagazine` command for the latter. This command is used for infantry weapons only.


---
*Syntaxes:*

`handgunItems` unit

---
*Example 1:*

```sqf
handgunItems player;
/*
[
	"muzzle_snds_L",	// silencer
	"",					// laser
	"",					// optics
	""					// bipod
]
*/
```