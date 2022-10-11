Sets AI ` group` combat mode (engagement rules). For individual unit's combat mode see `setUnitCombatMode`. Mode may be one of the following: 
* **"BLUE"** : Never fire, keep formation
* **"GREEN"** : Hold fire, keep formation
* **"WHITE"** : Hold fire, engage at will/loose formation
* **"YELLOW"** : Fire at will, keep formation
* **"RED"** : Fire at will, engage at will/loose formation
See `Combat Modes` for more information on combat modes.


---
*Example 1:*
```sqf
_group1 setCombatMode "BLUE";
```