Display a checklist of players that don't meet the given condition, thus preventing mission progress.


---
*Syntaxes:*

[conditionProceed, conditionPlayer, code] call `BIS_fnc_EXP_camp_playerChecklist`

---
*Example 1:*

```sqf
[{count allPlayers == 4}] call BIS_fnc_EXP_camp_playerChecklist;
```