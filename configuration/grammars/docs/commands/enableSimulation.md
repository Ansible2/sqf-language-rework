Enables / disables simulation for the given entity, e.g its animation and physics; it will still be able to take damage and report enemies.
This command will affect entity simulation only `locally`.
For a global and JIP enabled alternative, see `enableSimulationGlobal`.


---
*Syntaxes:*

entity `enableSimulation` state

---
*Example 1:*

```sqf
player enableSimulation false;
```