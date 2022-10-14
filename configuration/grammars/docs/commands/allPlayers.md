Returns a list of all units controlled by `connected clients` - human players including dead players, but also [[Arma 3 Headless Client|Headless Clients]].<br>
Use `BIS_fnc_listPlayers` or see {{HashLink|#Example 1}} to only get human players.


---
*Syntaxes:*

`allPlayers`

---
*Example 1:*

```sqf
// only gets human players
private _headlessClients = entities "HeadlessClient_F";
private _humanPlayers = allPlayers - _headlessClients;
```

*Example 2:*

```sqf
{
	systemChat format [
		"Player %1 is %2", 
		name _x, 
		["dead", "alive"] select alive _x
	];
} forEach allPlayers;
```

*Example 3:*

```sqf
private _bluNums = west countSide allPlayers;
```