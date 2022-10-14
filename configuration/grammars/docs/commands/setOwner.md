From server machine, change the ownership of an object to a given client. Using command in an unintended way will log a message to .rpt file. To transfer ownership of all AI units in a group properly, use `setGroupOwner` instead.


---
*Syntaxes:*

object `setOwner` clientID

---
*Example 1:*

```sqf
_someObject setOwner 12;
```

*Example 2:*

```sqf
_someObject setOwner (owner _playerObject);
```