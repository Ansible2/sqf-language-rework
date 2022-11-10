Stack code/function that should be run later, after some time/frames or/and custom condition. Internally calls `BIS_fnc_loop`.


---
*Syntaxes:*

[id, code, timer, timerType, condition] call `BIS_fnc_runLater`

---
*Example 1:*

```sqf
// Hints current game time in the next frame after 5 seconds have passed
["uniqueId", { hint str time; }, 5] call BIS_fnc_runLater;
```

*Example 2:*

```sqf
// Hints current game time in the next frame after 120 frames have passed
["uniqueId", { hint str time; }, 120, "frames"] call BIS_fnc_runLater;
```

*Example 3:*

```sqf
// Hints current game time in the next frame after BIS_variable is assigned
["uniqueId", { hint str time; }, nil, nil, { !isNil { BIS_variable } }] call BIS_fnc_runLater;
```

*Example 4:*

```sqf
// Hints current game time in the next frame after 5 seconds have passed and BIS_variable is assigned
["uniqueId", { hint str time; }, 5, "seconds", { !isNil { BIS_variable } }] call BIS_fnc_runLater;
```

*Example 5:*

```sqf
// Hints current game time in the next frame
["uniqueId", { hint str time; }] call BIS_fnc_runLater;
```