Enable or disable simulation for given entity, globally. Has the same effect as `enableSimulation` when used in singleplayer.


---
*Syntaxes:*

entity `enableSimulationGlobal` enable

---
*Example 1:*

```sqf
_myObject enableSimulationGlobal false;
```

*Example 2:*

```sqf
[_object, false] remoteExec ["enableSimulationGlobal", 2];
```