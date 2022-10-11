Removes all unit's user added actions.


---
*Example 1:*
```sqf
removeAllActions player;
```

*Example 2:*
Do

```sqf
private _actionId = player addAction ["Heal self", { player setDamage 0; }];
// ...
player removeAction _actionId;
```
Don't

```sqf
player addAction ["Heal self", { player setDamage 0; }];
// ...
removeAllActions player;
```

*Example 3:*
Do

```sqf
player addAction ["Heal self (once)", {
	params ["_target", "", "_actionId"];
	_target setDamage 0;
	_target removeAction _actionId;
}];
```
Don't

```sqf
player addAction ["Heal self (once)", {
	player setDamage 0;
	removeAllActions player;
}];
```