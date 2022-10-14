Return current level of damage for a specific Hit Point (specified by its hit part index). All hit points can be obtained with `getAllHitPointsDamage` command.
* 0: no damage
* 1: full damage


---
*Syntaxes:*

vehicle `getHitIndex` hitPartIndex

---
*Example 1:*

```sqf
vehicle player getHitIndex 3;
```