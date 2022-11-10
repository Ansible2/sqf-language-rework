Extends MP-only `netId` functionality to SP


---
*Syntaxes:*

objOrGrp call `BIS_fnc_netId`

---
*Example 1:*

```sqf
private _objNetId = player call BIS_fnc_netId; // "0:2"
```

*Example 2:*

```sqf
private _grpNetId = group player call BIS_fnc_netId; // "0:3"
```