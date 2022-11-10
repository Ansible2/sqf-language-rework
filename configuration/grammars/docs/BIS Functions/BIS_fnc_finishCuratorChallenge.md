Handle repeated curator challenges.
	When rewards defined in the argument are exceeded, refilling points bar fill be offered instead. Number of challenges can be retrieved by


---
*Syntaxes:*

[curator,input,taskState]] call `BIS_fnc_finishCuratorChallenge`

---
*Example 1:*

```sqf
[BIS_curator,["DestroyVehicle",BIS_curator],"SUCCEEDED"] call BIS_fnc_finishCuratorChallenge;
_number = BIS_curator getVariable "DestroyVehicle";
```