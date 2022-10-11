Allow curator use of given addon.


---
*Example 1:*
```sqf
curatorObj addCuratorAddons ["A3_Armor_F_AMV","A3_Armor_F_Panther"];
```

*Example 2:*
```sqf
curatorObj addCuratorAddons ["A3_Modules_F_Curator_Lightning"];
```

*Example 3:*
Addons can be stacked:

```sqf
curatorObj addCuratorAddons ["A3_Armor_F_AMV","A3_Armor_F_Panther"];
curatorObj addCuratorAddons ["A3_Modules_F_Curator_Lightning"];
diag_log curatorAddons curatorObj;
```
<br>

```sqf
[
	"A3_Armor_F_AMV",
	"A3_Armor_F_Panther",
	"A3_Modules_F_Curator_Lightning"
]
```