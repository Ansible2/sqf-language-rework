This command will execute the provided code on the server whenever a player connects to a multiplayer session.


---
*Syntaxes:*

`onPlayerConnected` code

---
*Example 1:*

```sqf
onPlayerConnected "[_id, _name] execVM 'PlayerConnected.sqf';";
```

*Example 2:*

```sqf
onPlayerConnected { diag_log [_id, _uid, _name] };
```

*Example 3:*

From <See arm Reference 3> v1.49:

```sqf
onPlayerConnected {
	somevar = random 123;
	_owner publicVariableClient "somevar";
	// this will define "somevar" to a random value on the joining machine
};
```