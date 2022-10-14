Updates config without restarting. Attributes and classes can not be deleted unless **`delete`}} is used. Changes to the config are applied to all new entities, a mission restart is not necessarily required. Spawning the vehicle again or switching weapons works too. Since {{GVI|arma3|1.70** CfgAmmo should be mergeable as well.


---
*Syntaxes:*

`diag_mergeConfigFile`  [path, userdir]

---
*Example 1:*

```sqf
diag_mergeConfigFile ["O:\Arma3\A3\Stuff_F\config.cpp"]
```