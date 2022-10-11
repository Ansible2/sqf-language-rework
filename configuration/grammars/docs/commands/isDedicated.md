Returns `true` if the machine executing the command is a dedicated multiplayer server. Returns `false` in single player.


---
*Example 1:*
```sqf
if (isDedicated) then {diag_log "Dedicated Server on the run !";};
```