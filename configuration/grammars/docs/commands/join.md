Join all units in the array to given group. 

To have a group member leave a group, join him with the `grpNull` group (e.g. **[guy1] `join` `grpNull`**), but `beware`, as brand new group is created for the leaving unit and this could result in the number of groups in a mission growing out of control.


---
*Example 1:*
```sqf
[_unitOne, _unitTwo] join player;
```

*Example 2:*
```sqf
[_unitOne, _unitTwo] join (group player);
```