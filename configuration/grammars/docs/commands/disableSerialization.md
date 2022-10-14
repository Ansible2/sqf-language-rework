Disable saving of script containing this command. After this, the script can work with data types which do not support serialization (UI types). See `Namespace serialization` for more information.


---
*Syntaxes:*

`disableSerialization`

---
*Example 1:*

```sqf
disableSerialization;
private _display = findDisplay 46;
```