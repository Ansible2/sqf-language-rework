Show a config-defined `Arma 3: Notification|notification`.


---
*Syntaxes:*

[template, arguments] call `BIS_fnc_showNotification`

---
*Example 1:*

```sqf
["TaskSucceeded", ["", "Disable the nuke"]] call BIS_fnc_showNotification;
```

*Example 2:*

```sqf
["ScoreAdded", ["Disabled the nuke without triggering an alarm.", 5]] call BIS_fnc_showNotification;
```