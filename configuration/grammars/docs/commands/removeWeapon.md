Remove weapon from a unit. The unit must be `local` to the computer where command is executed. For a global version of this command see `removeWeaponGlobal`.

`Note`: It is possible to create invalid combinations with this command (ie, attempting to remove a weapon that a unit does not possess). When doing so, application behaviour is undefined.


---
*Syntaxes:*

unit `removeWeapon` weapon

---
*Example 1:*

```sqf
player removeWeapon "BAF_L85A2_RIS_SUSAT";
```

*Example 2:*

```sqf
An_2 removeWeapon "M240_veh";
```