Removes all MP event handlers of the given type which were added by `addMPEventHandler`. Command needs to be executed only on one PC for MP event handler to be removed globally.


---
*Syntaxes:*

objectName `removeAllMPEventHandlers` event

---
*Example 1:*

```sqf
player removeAllMPEventHandlers "MPKilled";
```