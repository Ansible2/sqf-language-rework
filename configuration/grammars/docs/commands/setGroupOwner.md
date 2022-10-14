Changes the ownership of a group (and all its units) to a given client. The group leader must not be a player. This command only works when called from the server. Returns true if locality was changed. For `agents` use `setOwner` command.


---
*Syntaxes:*

group `setGroupOwner` clientID

---
*Example 1:*

```sqf
_localityChanged = _someGroup setGroupOwner (owner _playerObject);
```