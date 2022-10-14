Returns the player's `side`. This is valid even when the player controlled person is dead (a difference from `side` `player`).


---
*Syntaxes:*

`playerSide`

---
*Example 1:*

```sqf
if (side man1 == playerSide) then
{
	hint "man1 is on your side!";
};
```

*Example 2:*

```sqf
switch (playerSide) do
{
	case west: { hint "You are BLUFOR"; };
	case east: { hint "You are OPFOR"; };
};
```

*Example 3:*

the following code will change the side of the player including `playerSide`:

```sqf
private _player = player;
[player] join createGroup east;
selectNoPlayer;
selectPlayer _player;
hint str playerSide; // EAST
```