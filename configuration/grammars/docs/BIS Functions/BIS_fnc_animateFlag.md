Smoothly animates given flag from current position on the flag pole to the given position. When flag animation is done, the scripted event handler "FlagAnimationDone" is called.


---
*Syntaxes:*

[flag, phase, instant] call `BIS_fnc_animateFlag`

---
*Example 1:*

```sqf
[flag1, 0] call BIS_fnc_animateFlag;
```

*Example 2:*

```sqf
// Adding the "FlagAnimationDone" EH
private _eh = [<yourflag>, "FlagAnimationDone", { /* your code */ }] call BIS_fnc_addScriptedEventHandler;
```