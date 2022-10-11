Checks whether the unit is a `captive`. If the unit is a vehicle, its commander is checked instead.<br>
If a unit's captivity level was set as a `Boolean`, then the returned number is either 0 (for `false`) or 1 (for `true`).


---
*Example 1:*
```sqf
_captivity = captiveNum _unit;
```

*Example 2:*
```sqf
_unit setCaptive 1024;
hint str captive _unit; // true
hint str captiveNum _unit; // 1024
```