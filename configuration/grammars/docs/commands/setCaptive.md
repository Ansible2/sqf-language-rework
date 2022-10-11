Mark a unit as captive. If unit is a vehicle, commander is marked. A captive unit:
* is seen as belonging to the `civilian` `side`
* will not be fired upon
* will still shoot at its real side's enemies
* will not get its weapons removed (see `removeAllWeapons`)
* will not trigger "detected by" conditions for its original `side`.


---
*Example 1:*
```sqf
_soldier1 setCaptive true;
side _soldier1; // returns civilian
side group _soldier1; // returns e.g blufor
```

*Example 2:*
```sqf
_soldier1 setCaptive 1;
captive _soldier1; // returns true

_soldier1 setCaptive 42;
captive _soldier1; // returns true

_soldier1 setCaptive 0;
captive _soldier1; // returns false
```