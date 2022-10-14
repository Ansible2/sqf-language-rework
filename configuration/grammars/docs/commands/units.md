Returns an array with all the units in the group or group of the unit. <br>
Since <See arm Reference 3> v2.02 the command can also return all units belonging to a certain side.


---
*Syntaxes:*

`units` type

---
*Example 1:*

```sqf
_myUnitCount = count units player;
```

*Example 2:*

```sqf
_isInMyGroup = _soldier1 in units player;
```

*Example 3:*

```sqf
_unitsEast = units opfor;
```

*Example 4:*

```sqf
// Both methods are the same, the latter is preferred
units group player; 	// [B Alpha 1-1:1 (R3vo),B Alpha 1-1:2,B Alpha 1-1:3,B Alpha 1-1:4,B Alpha 1-1:5,B Alpha 1-1:6,B Alpha 1-1:7,B Alpha 1-1:8]
units player; 			// [B Alpha 1-1:1 (R3vo),B Alpha 1-1:2,B Alpha 1-1:3,B Alpha 1-1:4,B Alpha 1-1:5,B Alpha 1-1:6,B Alpha 1-1:7,B Alpha 1-1:8]
```