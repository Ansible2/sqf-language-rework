Sets the current level of damage for a specific Hit Point. All hit points can be obtained with `getAllHitPointsDamage` command.


---
*Syntaxes:*

vehicle `setHitIndex` [hitPartIndex, damage, useEffects, killer, instigator]

---
*Example 1:*

```sqf
vehicle player setHitIndex [1, 1];
```

*Example 2:*

```sqf
player setHitIndex [7, 0.5];
```