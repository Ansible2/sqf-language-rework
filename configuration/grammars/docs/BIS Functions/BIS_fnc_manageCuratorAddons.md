Set which vision modes curator can access.


---
*Syntaxes:*

[curators,classes,condition,text] call `BIS_fnc_manageCuratorAddons`

---
*Example 1:*

```sqf
[BIS_curator,["A3_Air_F_Heli"],{count allPlayers > 15},"Helicopters unlocked!"] call BIS_fnc_manageCuratorAddons;
```