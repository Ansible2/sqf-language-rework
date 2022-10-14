Returns combat behaviour of unit or group. To set unit or group behaviour see `setCombatBehaviour`. The behaviour is one of:
{{Columns|2|
* "CARELESS"
* "SAFE"
* "AWARE"
* "COMBAT"
* "STEALTH"
* "ERROR" - when not available


---
*Syntaxes:*

`combatBehaviour` unit

`combatBehaviour` group

---
*Example 1:*

```sqf
unit1 setCombatBehaviour "CARELESS";
combatBehaviour unit1; // "CARELESS"
```

*Example 2:*

```sqf
group unit1 setCombatBehaviour "SAFE";
combatBehaviour group unit1; // "SAFE"
```