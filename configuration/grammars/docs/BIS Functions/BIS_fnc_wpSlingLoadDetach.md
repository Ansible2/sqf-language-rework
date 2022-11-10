DETACH SLINGLOAD `custom waypoint`.

Unload an object which was previously loaded using `BIS_fnc_wpSlingLoadAttach`.


---
*Syntaxes:*

`Custom Waypoint arguments`: [posLimit,limitDir]

---
*Example 1:*

```sqf
[player, position dude, 50, 10, [42, 52]] spawn BIS_fnc_wpSlingLoadDetach;
```