Checks whether the given object or type is (a subtype) of the given type.<br>
While {{HashLink|#Syntax 1}} and {{HashLink|#Syntax 2}} only support `CfgVehicles`, {{GVI|arma2|1.00


---
*Syntaxes:*

object `isKindOf` typeName

typeName1 `isKindOf` typeName2

typeName1 `isKindOf` [typeName2, targetConfig]

---
*Example 1:*

```sqf
vehicle player isKindOf "Tank";
```

*Example 2:*

```sqf
"BMP2" isKindOf "Tank";
```

*Example 3:*

```sqf
currentWeapon player isKindOf ["Rifle", configFile >> "CfgWeapons"];
```