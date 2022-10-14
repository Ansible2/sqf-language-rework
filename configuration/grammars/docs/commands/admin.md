This is dedicated server command, which queries the admin state of any client on the network by their client (`owner`) id.


---
*Syntaxes:*

`admin` ownerID

---
*Example 1:*

```sqf
private _isLoggedInAdmin = admin 3 == 2;
```

*Example 2:*

```sqf
private _adminState = admin owner unit1;
```