Set entity `attributes`.
An attribute is identified by its **property}} ({{hl|data** when it is engine-drive attribute) value in config.
For the list of all attributes with their properties, see `Setting Attributes`.


---
*Syntaxes:*

[[set3DENAttributes]] [<nowiki/>[entities1, class1, value1], [entities2, class2, value2], ...]

---
*Example 1:*

```sqf
// Set all selected objects as playable
set3DENAttributes [[get3DENSelected "Object", "ControlMP", true]];
```