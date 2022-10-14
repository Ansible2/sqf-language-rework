* Old syntax: Reload first found muzzle that needs reloading (with some inconsistencies). 
* Alternative syntax (Since Arma 3 v2.08.148609): This syntax allows to reload given muzzle with given magazine while playing proper animation. If param is omitted or is empty string, default value is used. The default behaviour is to find best matching magazine for given muzzle from the pool of available magazines. If specific magazine is requested, the reload will fail if unit has run out of this type of magazines. If empty array [] is given, the behaviour is similar to player pressing "Reload" key. The command reloads the given muzzle but doesn't select it. In case of ` throwable` muzzles, each throwable has own muzzle, they are autoreloaded after throw. Using reload on the trowable muzzle will just swap throwable for another one of the same type from inventory.


---
*Syntaxes:*

`reload` unitName

unit `reload` [muzzle, magazine]

---
*Example 1:*

```sqf
if (needReload player == 1) then { reload player };
```

*Example 2:*

```sqf
player reload ["GL_3GL_F", "1Rnd_HE_Grenade_shell"];
```

*Example 3:*

Reload current muzzle:

```sqf
player reload [];
```