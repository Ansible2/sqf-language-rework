Assign a unit as commander of a vehicle. Used together with `orderGetIn` to order subordinate units to get in as commander of a specific vehicle.
Before usage of this command a subordinate unit has not got the option to get into the commander place of the vehicle.


---
*Syntaxes:*

unitName `assignAsCommander` vehicleName

---
*Example 1:*

```sqf
_soldier1 assignAsCommander _tank;
[_soldier1] orderGetIn true;
```