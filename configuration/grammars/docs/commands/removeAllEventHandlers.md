Removes all event handlers of given type that were added by `addEventHandler` `and` resets event handler's creation index to 0.


---
*Syntaxes:*

target `removeAllEventHandlers` handlerType

---
*Example 1:*

```sqf
player removeAllEventHandlers "Killed";
```