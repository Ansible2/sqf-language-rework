Dumps the argument's value to the `report file`. Each call creates a new line in the file.


---
*Syntaxes:*

`diag_log`  output

---
*Example 1:*

```sqf
diag_log time;
```

*Example 2:*

```sqf
diag_log format ["%1, %2", player, time];
```

*Example 3:*

```sqf
_array = [1, "foo", player, "bar"];
{
	diag_log _x;
} forEach _array ; // creates 4 entries on 4 lines
```

*Example 4:*

```sqf
_array = [1, "foo", player, "bar"];
diag_log _array; // Creates one entry of e.g. [1,"foo",B Alpha 1-1:1 (Player Name),"bar"]
```