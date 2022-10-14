Returns a list of playable units available for switching to
* Command is relative to the client on which it is executed and will only show playable units for the same `side` as `player`'s `group` + `player` himself
* In singleplayer where playable units from all sides will be accessible via this command
* Dead and player-controlled units are automatically removed from the resulting array
* In order to get all `playable` units regardless of their `side`, see the `playableUnits` command


---
*Syntaxes:*

`switchableUnits`

---
*Example 1:*

```sqf
_availableUnits = switchableUnits;
```