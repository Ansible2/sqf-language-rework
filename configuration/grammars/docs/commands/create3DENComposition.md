Create new `Composition`. To create individual entities, use [[create3DENEntity]].


---
*Example 1:*
```sqf
myComposition = create3DENComposition [
	configFile >> "CfgGroups" >> "West" >> "BLU_F" >> "Infantry" >> "BUS_InfSquad",
	screenToWorld [0.5, 0.5]
];
```