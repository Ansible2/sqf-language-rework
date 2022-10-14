Reveals a target to a `group`. If `toWhom` is a unit, unit's group is considered. If `toWhom` is a vehicle, vehicle commander's group is considered.  The `knowledge value` will be set to the highest level any unit of the revealing side has about the revealed target. If the revealing side has `no` knowledge about the revealed target, the value will be set to 1.


---
*Syntaxes:*

toWhom `reveal` target

toWhom `reveal` [target, accuracy]

---
*Example 1:*

```sqf
_soldierOne reveal _soldierTwo; // soldierOne knowsAbout information about soldierTwo is updated
```

*Example 2:*

```sqf
player reveal cursorObject; // player knowsAbout information about object under cursor is updated
```

*Example 3:*

```sqf
_soldierOne reveal [_soldierTwo, 1.5];
```