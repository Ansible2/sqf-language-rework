Return leader of the formation.


---
*Syntaxes:*

`formationLeader` unitName

---
*Example 1:*

```sqf
if (formationLeader player != leader player) then
{
	hint "Formation leader is not the group leader.";
};
```