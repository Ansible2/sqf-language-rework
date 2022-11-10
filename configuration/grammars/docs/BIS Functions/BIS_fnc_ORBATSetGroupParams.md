Overrides group params from CfgORBAT. See `ORBAT Viewer` for a detailed explanation.


---
*Syntaxes:*

[target, IDType, size, type, side, name, shortName, texture, textSizeCoef, insignia, textColour, commName, commRank, description, assets] call `BIS_fnc_ORBATSetGroupParams`

---
*Example 1:*

```sqf
[
 configFile >> "CfgORBAT" >> "BIS" >> "B_1_A_1",
 1, 
 "Platoon", 
 "Infantry", 
 "West", 
 "Name: %1 %2 %3", 
 "Short Name: %1 %2 %3", 
 "b_air", 
 3,
 "\A3\Air_F_EPB\Heli_Light_03\data\UI\Heli_Light_03_CA.paa", 
 [0,0,0,1], 
 "Commander Name", 
 "General", 
 "Description", 
 [ ["B_MRAP_01_F",5] ] 
] call BIS_fnc_ORBATSetGroupParams;
```