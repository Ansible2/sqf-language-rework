This command will execute attached code whenever a player is leaving an MP session. The code will receive a number of special variables:


---
*Syntaxes:*

`onPlayerDisconnected`  code

---
*Example 1:*

```sqf
onPlayerDisconnected {diag_log [_id, _uid, _name]};
```

*Example 2:*

```sqf
onPlayerDisconnected {
	if (count allPlayers == 0) then {
		endMission "END1";
	};
};
```