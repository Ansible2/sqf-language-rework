Returns all magazines that can be loaded in the given weapon.


---
*Syntaxes:*

`compatibleMagazines` weapon

`compatibleMagazines` [weapon, muzzle]

---
*Example 1:*

```sqf
compatibleMagazines "arifle_Katiba_GL_F";
```

*Example 2:*

```sqf
compatibleMagazines ["arifle_Katiba_GL_F", "this"];
```

*Example 3:*

```sqf
compatibleMagazines ["arifle_Katiba_GL_F", "EGLM"];
```