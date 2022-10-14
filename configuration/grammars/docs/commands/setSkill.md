Sets the skill level of given unit. The value of a `sub-skill` is interpolated into a range defined in `CfgAISkill`.


---
*Syntaxes:*

unit `setSkill` skill

unit `setSkill` [skillName, value]

---
*Example 1:*

```sqf
_hero setSkill 1;
```

*Example 2:*

```sqf
_finalBoss setSkill ["reloadSpeed", 0.8];
_finalBoss setSkill ["aimingSpeed", 0.33];
```