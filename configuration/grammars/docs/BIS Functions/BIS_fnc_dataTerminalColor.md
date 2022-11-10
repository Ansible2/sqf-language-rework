Set Data Terminal colors for its different steps. Steps are:
# closed terminal
# opening terminal
# emitting terminal.

Default step colors are "blue", "orange", "green".
See `BIS_fnc_dataTerminalAnimate` to animate a terminal.


---
*Syntaxes:*

[dataTerminal, step1color, step2color, step3color] call `BIS_fnc_dataTerminalColor`

---
*Example 1:*

```sqf
[myTerminal, "purple", "red", "orange"] call BIS_fnc_dataTerminalColor;
```