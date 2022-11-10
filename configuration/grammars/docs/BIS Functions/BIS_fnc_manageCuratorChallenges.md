Handle repeated curator challenges.
	When rewards defined in the argument are exceeded, refilling points bar fill be offered instead.


---
*Syntaxes:*

[curator,challenges,numChallenges,rewards,defaultRewards]] call `BIS_fnc_manageCuratorChallenges`

---
*Example 1:*

```sqf
[ BIS_curator, nil, 1, [ [{ hint "Message" }, "Description" ] ] ] call BIS_fnc_manageCuratorChallenges;
```