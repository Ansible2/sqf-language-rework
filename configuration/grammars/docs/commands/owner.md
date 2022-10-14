On server machine, returns the ` machine network ID` of the client to which the object is `local`. Otherwise returns 0. For use on clients `clientOwner` command is available. To find out the owner of a `Group`, use `groupOwner`.


---
*Syntaxes:*

`owner` object

---
*Example 1:*

```sqf
_clientID = owner _someobject;
```