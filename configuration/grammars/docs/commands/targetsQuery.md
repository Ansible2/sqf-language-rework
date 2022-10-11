Returns sorted array of targets, `known` to the enquirer (including own troops), where the accuracy coefficient reflects how close the result matches the query. This command could be CPU intensive.


---
*Example 1:*
Return all known targets for player:

```sqf
_targets = player targetsQuery [objNull, sideUnknown, "", [], 0];
```

*Example 2:*
Prioritise all known OPFOR targets and return targets less than 10 seconds old:

```sqf
_targets = player targetsQuery [objNull, east, "", [], 10];
```