Returns the value of the given entity's `attribute` in `Eden Editor`.<br><br>
An attribute is identified by its **property}} ({{hl|data** when it is engine-drive attribute) value in config. For the list of all attributes with their properties, see `Setting Attributes`.


---
*Syntaxes:*

entity [[get3DENAttribute]] attribute

---
*Example 1:*

```sqf
// returns variable name of the object under cursor
systemChat str ((get3DENMouseOver select 1) get3DENAttribute "name");
```