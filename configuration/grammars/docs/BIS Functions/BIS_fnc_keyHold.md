Allows for hold button interactions. Hold action is started by pressing the space bar.


---
*Syntaxes:*

[description, duration, condition, arguments, loaded] spawn `BIS_fnc_keyHold`

---
*Example 1:*

```sqf
["Hold that key!",2,{alive player}] spawn BIS_fnc_keyHold;
```