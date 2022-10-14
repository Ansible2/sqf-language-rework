Select the group's leader. Group locality can be checked with `local` command and group ownership with `groupOwner` command.


---
*Syntaxes:*

group `selectLeader` unitName

---
*Example 1:*

```sqf
group player selectLeader player;
```

*Example 2:*

Make unit a leader from server:

```sqf
[group _unit, _unit] remoteExec ["selectLeader", groupOwner group _unit];
```