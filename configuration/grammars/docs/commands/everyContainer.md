Returns array of all containers (uniforms, vests, backpacks) stored in given crate or vehicle. Used for accessing containers content stored in ammo box or ground holder.


---
*Syntaxes:*

`everyContainer` object

---
*Example 1:*

```sqf
everyContainer cursorTarget;
/*
	returns e.g
	[
		["V_PlateCarrier1_rgr",2bc06b00# 163955: dummyweapon.p3d],
		["U_B_CombatUniform_mcam",2bc07900# 163954: dummyweapon.p3d]
	]
*/
```