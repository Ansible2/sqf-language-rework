Check if conversation topic was registered to given person. See `Conversations` for more details.


---
*Example 1:*
```sqf
_obiHasTopic = player kbHasTopic "helloThereGeneralK";
```

*Example 2:*
```sqf
if (player kbHasTopic "dontShoot") then { player kbRemoveTopic "dontShoot"; };
```