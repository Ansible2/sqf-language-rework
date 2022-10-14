Add given member to given team. Effect is local, unless both member and team are local to PC on which command is executed, then effect is global.

<br><br> The same `Team Member` can be member of several different `teams` at the same time.


---
*Syntaxes:*

team `addTeamMember` member

---
*Example 1:*

```sqf
_team addTeamMember _teamMember;
```