Orders the given unit or a group of units to suppress the given position or target (without radio messages, see `commandSuppressiveFire` is you need messages). 
* When an `Array` of units is passed as param, only units from the same `Group` as the first unit in array are considered. 
* The unit (units) starts firing at the given target or position random amount of shots (exact formula unknown, but seems to depend on amount of ammo unit has) after which it stops. 
* `currentCommand` shows **"Suppress"** and there is no way of stopping unit before it completes random amount of rounds. 
* If position is passed as target param, it stays fixed. 
* If object is passed as target param, it depends on what kind of object. If it is considered a proper target by the unit, it is tracked by the unit dynamically. If it is not, the position gets obtained via `getPosWorld`, which could be different from `PositionASL` of the object, and it is fixed even if the target is able to change position later.


---
*Example 1:*
```sqf
_soldier doSuppressiveFire [1869.508,5760.962,0.000];
```

*Example 2:*
```sqf
units player doSuppressiveFire cursorTarget;
```