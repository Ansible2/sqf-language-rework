Sets `effectiveCommander` of the given vehicle. Effective commander is the person who commands the vehicle, i.e. gives commands to the driver.
Every time a person gets in or out of a vehicle, effective commander eligibility is recalculated by the engine based on the current `crew`.
Use this command to force desired effective commander.


---
*Syntaxes:*

vehicle `setEffectiveCommander` person

---
*Example 1:*

```sqf
vehicle player setEffectiveCommander player;
```