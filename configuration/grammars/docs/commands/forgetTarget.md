Resets the info a group has about a target, forcing `knowsAbout` value to 0.


---
*Example 1:*
```sqf
soldier1 forgetTarget soldier2;
```

*Example 2:*
Give enemyBob some amnesia:

```sqf
onEachFrame { enemyBob forgetTarget player };
```