Checks if given person is a `player`. Returns `true` for headless clients as well.


---
*Syntaxes:*

`isPlayer` unit

`isPlayer` [person]

---
*Example 1:*

```sqf
if (isPlayer _Soldier1) then
{
	_soldier1 setDamage 1;
};
```

*Example 2:*

```sqf
_playerCount = { isPlayer _x } count playableUnits;
```

*Example 3:*

```sqf
private _wasPlayer = isPlayer [_deadBody]; // returns true if _deadBody's identity still exists and was controlled by a player
```