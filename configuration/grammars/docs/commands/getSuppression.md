Gets the suppression value for the given unit. Returns varying `Number` between 0 and 1, or -1 if suppression is disabled (**`disableAI` "SUPPRESSION"**) or the suppression value is not available. Suppression is not calculated for player entities and is always 0, unless it is set with `setSuppression`. In this case the return value is the set value. Before Arma 3 v1.92 this command could return `nil`.<br><br>


---
*Example 1:*
```sqf
getSuppression AI_unit_1;
```