Assigns the unit (in case of a vehicle, its commander) to the given team. Team is an option in group control (unit management) menu that allows to split player group in teams and then give bulk order to separate teams. In order to operate properly, the command requires specific conditions:
* The command requires `player` to be fully initialised
* The unit getting assigned must be either player himself or a unit in player's group
* Units in player's group as well as player himself can all have different teams assigned
* The colour of the assigned team for a unit is seen on the group management UI as well as squad radar
The possible team values (colours) are: 
* "MAIN" - (white)
* "RED" - (red)
* "GREEN" - (green)
* "BLUE" - (blue)
* "YELLOW"  - (yellow)
`NOTE`: In older version of the game the effect of this command is local <See Icon Reference 32>


---
*Syntaxes:*

unit `assignTeam` team

---
*Example 1:*

```sqf
_soldier2 assignTeam "RED";
```

*Example 2:*

In a unit's init script in the editor you should use the following. Or else you might experience [race conditions](https://en.wikipedia.org/wiki/Race_condition). 

```sqf
this spawn {_this assignTeam "RED"};
```