Returns the ` machine network ID` of the client to which the group is local. This command only works when called from the server. When called from a client, it always returns 0.


---
*Example 1:*
```sqf
_clientID = groupOwner _someGroup;
```