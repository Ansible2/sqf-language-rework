Add group to unit's `high command` bar.


---
*Example 1:*
```sqf
unit hcSetGroup [group, "HQ", "teamred"];
```

*Example 2:*
```sqf
player hcSetGroup [group];
```

*Example 3:*
```sqf
if (player != hcLeader _group) then
{
	hcLeader _group hcRemoveGroup _group;
	player hcSetGroup [_group];
};
```