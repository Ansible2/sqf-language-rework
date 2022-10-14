Remove a given event handler from the given display.


---
*Syntaxes:*

display `displayRemoveEventHandler`  [handlerType, id]

---
*Example 1:*

```sqf
findDisplay 46 displayRemoveEventHandler ["keyDown",5];
```