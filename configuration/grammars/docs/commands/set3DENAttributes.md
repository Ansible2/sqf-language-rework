Set entity `attributes`.
An attribute is identified by its **property}} ({{hl|data** when it is engine-drive attribute) value in config.
For the list of all attributes with their properties, see `Setting Attributes`.


---
*Example 1:*
```sqf
// Set all selected objects as playable
set3DENAttributes [[get3DENSelected "Object", "ControlMP", true]];
```