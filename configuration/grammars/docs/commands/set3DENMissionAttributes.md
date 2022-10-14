Set `scenario attributes`.
An attribute is identified by its **property}} ({{hl|data** when it is an engine-driven attribute) value in config.
For the list of all attributes with their properties, see `Mission Attributes`.


---
*Syntaxes:*

[[set3DENMissionAttributes]] [<nowiki/>[section1, class1, value1], ...]

---
*Example 1:*

```sqf
// set respawn type to 3 and respawn delay to 10 seconds
set3DENMissionAttributes [["Multiplayer", "respawn", 3], ["Multiplayer", "respawnDelay", 10]];
```