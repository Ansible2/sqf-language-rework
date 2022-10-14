Sets `unit's` combat mode (engagement rules). For AI group combat mode see `setCombatMode`. Mode may be one of the following: 
* **"BLUE"** : Never fire, keep formation
* **"GREEN"** : Hold fire, keep formation
* **"WHITE"** : Hold fire, engage at will/loose formation
* **"YELLOW"** : Fire at will, keep formation
* **"RED"** : Fire at will, engage at will/loose formation
See `Combat Modes` for more information on combat modes.


---
*Syntaxes:*

unit `setUnitCombatMode` mode

---
*Example 1:*

```sqf
_unit setUnitCombatMode "YELLOW";
```