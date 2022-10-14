Returns information about what is currently displayed on given player's info panel.<br>
Returns ["EmptyDisplay","EmptyDisplayComponent"] when no panel is open.


---
*Syntaxes:*

`infoPanel` infoPanelId

---
*Example 1:*

```sqf
infoPanel "left" params ["_componentClass", "_componentType"];
```