The statement is executed when the trigger or waypoint is activated and the effects are launched depending on the result.

*If the result is a `boolean` and `true`, the effect is launched.
*If the result is an `object`, the effect is launched if the result is the player or the player vehicle.
*If the result is an `array`, the effect is launched if the result contains the player or the player vehicle.


---
*Syntaxes:*

trigger `setEffectCondition` statement

waypoint `setEffectCondition` statement

---
*Example 1:*

```sqf
_triggerObj setEffectCondition "thisList";
```