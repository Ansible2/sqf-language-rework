Manage respawn tickets used by `Arma 3 Respawn#Respawn Templates|Tickets` respawn template.<br>

When player dies, number of tickets is decreased by 1. The most local tickets are always used. Example: When you first add tickets to player's side, they will be affected. If you later define tickets also to player's group, they will completely replace the side tickets.

When player runs out of the tickets, his respawn is disabled. If you use also `EndMission` respawn template, the mission will automatically end once tickets in all name spaces are exhausted.


---
*Syntaxes:*

[target, tickets, dynamicTarget] call `BIS_fnc_respawnTickets`

[] call `BIS_fnc_respawnTickets`

---
*Example 1:*

Add 5 tickets for BLUFOR:

```sqf
[west, 5] call BIS_fnc_respawnTickets;
```

*Example 2:*

Return number of global tickets:

```sqf
_globalTickets = [missionNamespace] call BIS_fnc_respawnTickets;
```

*Example 3:*

Return number of player's tickets:

```sqf
_playerTickets = [player, nil, true] call BIS_fnc_respawnTickets;
```