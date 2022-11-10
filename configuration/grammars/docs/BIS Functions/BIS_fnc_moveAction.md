Return current move action (used in `playAction`, `playActionNow` and `switchAction`)


---
*Syntaxes:*

[unit, returnConfig] call `BIS_fnc_moveAction`

---
*Example 1:*

```sqf
_actionName		= [player, false] call BIS_fnc_moveAction;
_actionConfig	= [player,  true] call BIS_fnc_moveAction;
```