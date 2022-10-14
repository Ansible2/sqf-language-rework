Sets an individual unit entity behaviour (main syntax) or a group entity behaviour (alternative syntax). The group in this case is a `Group` entity and not a simple collection of units. To retrieve unit or group behaviour see `combatBehaviour`. The behaviour is one of: 
* "CARELESS"
* "SAFE"
* "AWARE"
* "COMBAT"
* "STEALTH"


<spoiler text="Comparison of Behaviour commands">
{


---
*Syntaxes:*

unit `setCombatBehaviour` behaviour

group `setCombatBehaviour` behaviour

---
*Example 1:*

```sqf
unit1 setCombatBehaviour "SAFE";
```

*Example 2:*

```sqf
group1 setCombatBehaviour "CARELESS";
```