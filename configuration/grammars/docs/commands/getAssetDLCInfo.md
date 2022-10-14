Returns DLC information about given object or model.


---
*Syntaxes:*

`getAssetDLCInfo` asset

`getAssetDLCInfo` [class, config]

---
*Example 1:*

```sqf
getAssetDLCInfo player;
```

*Example 2:*

```sqf
getAssetDLCInfo "a3\Weapons_F_Enoch\Rifles\MSBS\MSBS65_F";
```

*Example 3:*

```sqf
getAssetDLCInfo ["C_Van_01_transport_F"];
```

*Example 4:*

```sqf
getAssetDLCInfo ["arifle_AK12_F", configFile >> "CfgWeapons"];
```