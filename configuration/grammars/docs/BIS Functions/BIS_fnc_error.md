Log error message and display it (bottom of the UI). If it is called from a function, it'll include the function name before your content.<br/>
Output is: "``profileName`/log: ERROR: <your content>`"<br/>
<br/>


---
*Syntaxes:*

[message, param1, ..., param9] call `BIS_fnc_error`

---
*Example 1:*

```sqf
["Player is too far away (%1)",player distance dude] call BIS_fnc_error;
```