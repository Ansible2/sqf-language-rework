Handles the shooting targets in the Bootcamp DLC, statistics, animation, etc. (targets such as **TargetBootcampHuman_f**)


---
*Syntaxes:*

[action, parameters] call `BIS_fnc_target`

---
*Example 1:*

```sqf
// open the Score Board
["uiOpen", [myTarget]] call BIS_fnc_target;
```

*Example 2:*

```sqf
// open the Score Board for all players in MP
["uiOpenToAll", [myTarget]] call BIS_fnc_target;
```

*Example 3:*

```sqf
// clear all data from Score Board
["resetShootersData", [myTarget]] call BIS_fnc_target;
```