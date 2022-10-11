Returns the group leader for the given `unit` or `group`. For dead units, `objNull` is returned.


---
*Example 1:*
```sqf
leader group player == leader player;
```

*Example 2:*
```sqf
leader group vehicle player;
```

*Example 3:*
```sqf
leader player;
```