Enables or disables a trait or alters a trait of the given unit. Custom trait can only be a `bool`.<br><br>
Default traits are:
* `Number` `audibleCoef` - A lower value means the unit is harder to hear
* `Number` `camouflageCoef` - A lower value means the unit is harder to spot
* `Number` `loadCoef` - Equipment weight multiplier affecting fatigue and stamina
* `Boolean` `engineer` - Ability to partially repair vehicles with toolkit, equivalent to {{hl


---
*Syntaxes:*

unit `setUnitTrait` [skillName, value, isCustom]

---
*Example 1:*

```sqf
player setUnitTrait ["Medic", true];
```