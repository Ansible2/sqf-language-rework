Join all units in the array to given group silently (without radio message). To have a group member leave a group, join him with the `grpNull` group (e.g. **[guy1] `joinSilent` `grpNull`**), but `beware`, as brand new group is created for the leaving unit and this could result in the number of groups in a mission growing out of control.


---
*Example 1:*
```sqf
[_unitOne, _unitTwo] joinSilent (group player);
```

*Example 2:*
```sqf
[_unitOne, _unitTwo] joinSilent player;
```