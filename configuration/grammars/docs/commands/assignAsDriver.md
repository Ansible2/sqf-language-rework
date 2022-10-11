Assign a unit as driver of a vehicle. Used together with `orderGetIn` to order subordinate units to get in as driver of a specific vehicle. Before usage of this command a subordinate unit has not got the option to get into the driver place of the vehicle.


---
*Example 1:*
```sqf
_soldier1 assignAsDriver _tank;
[_soldier1] orderGetIn true;
```