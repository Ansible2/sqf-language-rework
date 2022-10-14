Alternative Injury Simulation (AIS) end state. Used to tell engine that script side healing is done when using "HandleHeal" event handler.


---
*Syntaxes:*

`AISFinishHeal` [unit, healer, healerCanHeal]

---
*Example 1:*

```sqf
AISFinishHeal [_wounded, _medic, true];
```