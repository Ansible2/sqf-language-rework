Return argument in mission editor of a given object.


---
*Syntaxes:*

map `evalObjectArgument` [object, argument]

---
*Example 1:*

```sqf
// returns string "[1009.0351, 1319.4928]"
(findDisplay 128 displayCtrl 51) getObjectArgument ["_unit_1", "POSITION"]

// returns array [1009.0351, 1319.4928]
(findDisplay 128 displayCtrl 51) evalObjectArgument ["_unit_1", "POSITION"]
```