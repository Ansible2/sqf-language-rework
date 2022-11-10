ATTACH SLINGLOAD `custom waypoint`.

Load an object to rope.


---
*Syntaxes:*

`Custom Waypoint arguments`: [posLimit, failCode, weight]

---
*Example 1:*

```sqf
[player, dude, 50, 10, { hintC "You lost the cargo!" }, 1000] spawn BIS_fnc_wpSlingLoadAttach;
```

*Example 2:*

```sqf
[player, dude, 0, true] spawn BIS_fnc_wpSlingLoadAttach; // attaches the cargo immediately
```