Returns a list of playable units in a multiplayer game (occupied by both AI or players), created on the following sides `east`/`opfor`, `west`/`blufor`, `resistance`/`independent` and `civilian` only. Does not contain units of `sideLogic`.<br>


---
*Syntaxes:*

`playableUnits`

---
*Example 1:*

```sqf
{ _x groupChat "I'm a playable unit."; } forEach playableUnits;
```

*Example 2:*

```sqf
_playableInGroup = units group player arrayIntersect playableUnits;
```

*Example 3:*

```sqf
_nonPlayableInGroup = units group player - playableUnits;
```