Returns `true` if the machine executing the command is the server in a multiplayer game or is running single player. It will return `true` for both dedicated and player-hosted server. See also `Multiplayer Scripting/machines`.


---
*Example 1:*
```sqf
if (!isServer) exitWith {};
```