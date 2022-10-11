Sets how friendly a side is with another. The friendliness is set for one side, not for the other.  See also `Side relations`.

 this command can be used mid-mission. Before that it was intended to be used on mission start only, as changing value during mission could cause unexpected errors in AI behaviour (especially for groups already knowing about "switched to enemy" groups).


---
*Example 1:*
```sqf
west setFriend [resistance, 0]; // west will not like resistance from now on
```

*Example 2:*
```sqf
resistance setFriend [east, 0];
east setFriend [resistance, 0]; // both are enemies

resistance setFriend [east, 1];
east setFriend [resistance, 0]; // resistance likes east, but east does not like resistance
```

*Example 3:*
```sqf
west setFriend [west, 0]; // free for all deathmatch! works with west/blufor, east/opfor, independent/resistance and civilian
```