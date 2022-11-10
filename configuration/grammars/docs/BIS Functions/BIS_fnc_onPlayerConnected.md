Executes a function on server every time a player connects the mission.


---
*Syntaxes:*

[code, params]] call `BIS_fnc_onPlayerConnected`

---
*Example 1:*

```sqf
[ 
 {
   params ["_player", "_params"];
   hint name _player; hint _params;
 }, 
 "Parameter" 
] call BIS_fnc_onPlayerConnected;
```