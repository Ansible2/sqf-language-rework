Returns current zeroing.


---
*Syntaxes:*

`currentZeroing` object

object `currentZeroing` [weaponClass, muzzleClass]

---
*Example 1:*

```sqf
private _zeroing = currentZeroing player;
```

*Example 2:*

```sqf
(player currentZeroing ["arifle_MX_GL_F", "GL_3GL_F"]) params ["_distance", "_zeroingIndex"];
```