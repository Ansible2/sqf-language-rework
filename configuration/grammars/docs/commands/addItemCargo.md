Creates new items and stores them in given container.
Works with [[Arma_3:_CfgWeapons_Items|items]], [[Arma_3:_CfgWeapons_Weapons|weapons]], [[Arma_3:_CfgMagazines|magazines]], [[Arma_3:_CfgWeapons_Equipment|equipment]] and [[Arma_3:_Characters_And_Gear_Encoding_Guide#Facewear_configuration|glasses]] but not backpacks.
In the latter case use `addBackpackCargo` instead. For the global variant, see `addItemCargoGlobal`.


---
*Example 1:*
```sqf
supplyBox addItemCargo ["optic_ARCO", 10];
```