Returns array of all components available to given object info panel.


---
*Example 1:*
```sqf
// returns array of all components configured for _helicopter pilot seat
private _componentsData = [_helicopter, [-1]] infoPanelComponents "left";
```