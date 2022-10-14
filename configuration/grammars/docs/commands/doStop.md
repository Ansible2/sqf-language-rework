Order the given unit(s) to stop (without radio messages). The units stopped in this way will leave the groups formation. It will prevent them from moving around with their group (or formation leader), while still being able to turn around and even move to a new position if they see fit. <br><br>The units will still respond to orders from their group leader (like engage, rearm, board a vehicle), but all of their actions will be separate from the group formation. To resume group default behaviour, use `doFollow` command. For example: **`units` _group `doFollow` `leader` _group;**


---
*Syntaxes:*

`doStop` unit(s)

---
*Example 1:*

```sqf
doStop _soldier1;
```

*Example 2:*

```sqf
doStop [_soldier1, _soldier2];
```

*Example 3:*

```sqf
doStop (units player);
```