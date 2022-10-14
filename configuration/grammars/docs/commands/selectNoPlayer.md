Switches player to no unit, makes `player` return `objNull`.


---
*Syntaxes:*

`selectNoPlayer`

---
*Example 1:*

Single player:

```sqf
selectNoPlayer;
hint str player; // <NULL-object>
```
Rough multiplayer emulation:

```sqf
_noPlayer = createGroup sideLogic createUnit [
	"Logic",
	[0,0,1000],
	[],
	0,
	"NONE"
];
selectPlayer _noPlayer;
hint str player; // L Charlie 4-3:1 (KK)
```