Add backpack(s) to the cargo space of vehicle. Classname list of available backpacks is [[Arma 2: Operation Arrowhead: Backpacks|here]].
For a list of possible backpacks, see:
* *(Reference GVI "arma2|1.50")* [[Arma 2: Operation Arrowhead: Backpacks]]
* *(Reference GVI "arma3|1.00")* [[Arma 3: CfgVehicles Equipment]] (starting with **B_**)


---
*Syntaxes:*

vehicle `addBackpackCargo` [backpackClassName, count]

---
*Example 1:*

```sqf
this addBackpackCargo ["TK_RPG_Backpack_EP1", 2];
```

*Example 2:*

```sqf
_apc addBackpackCargo ["US_Patrol_Pack_EP1", 4];
```