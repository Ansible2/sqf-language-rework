Returns the effective commander of the vehicle. Effective commander is the player whom driver AI will listen to. So if in a tank there is a gunner and a commander and AI driver, if the `effectiveCommander` is gunner, then gunner pressing WASD will give AI orders to move. If gunner jumps out and then enters tank again, the `effectiveCommander` role most likely has changed to commander that remained in tank. Also the assignment seems to work on first come first served basis.


---
*Syntaxes:*

`effectiveCommander` vehicle

---
*Example 1:*

```sqf
_commander = effectiveCommander tank;
```