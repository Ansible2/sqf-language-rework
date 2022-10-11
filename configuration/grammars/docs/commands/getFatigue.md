Returns fatigue of given unit.


---
*Example 1:*
```sqf
value = getFatigue player;
```

*Example 2:*
```sqf
if (getFatigue player < 0.5) then { player sideChat "I'm good to go!" };
```