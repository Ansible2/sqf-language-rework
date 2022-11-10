Loop stacked code/function with timing and conditional control. Code and conditions are executed in `non-scheduled environment`.


---
*Syntaxes:*

[action, parameters] call `BIS_fnc_loop`

---
*Example 1:*

```sqf
// hints time every five seconds
["itemAdd", ["uniqueId", { hint str time; }, 5]] call BIS_fnc_loop;
```

*Example 2:*

```sqf
// removes stacked loop with id of uniqueId
["itemRemove", ["uniqueId"]] call BIS_fnc_loop;
```

*Example 3:*

```sqf
// hints time every frame after BIS_variable is assigned
["itemAdd", ["uniqueId", { hint str time; }, nil, nil, { !isNil { BIS_variable } }]] call BIS_fnc_loop;
```

*Example 4:*

```sqf
// hints time every five seconds after BIS_variable is assigned
["itemAdd", ["uniqueId", { hint str time; }, 5, "seconds", { !isNil { BIS_variable } }]] call BIS_fnc_loop;
```

*Example 5:*

```sqf
// hints time every frame
["itemAdd", ["uniqueId", { hint str time; }]] call BIS_fnc_loop;
```

*Example 6:*

```sqf
// remove item from loop with id "uniqueId"
["itemRemove", ["uniqueId"]] call BIS_fnc_loop;
```