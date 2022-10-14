Get group with given unique ID. For objects use `objectFromNetId`. As this command is MP only, you can use `BIS_fnc_groupFromNetId`, which extends the use to SP as well.


---
*Syntaxes:*

`groupFromNetId` id

---
*Example 1:*

```sqf
_group = groupFromNetId "4:45";
```