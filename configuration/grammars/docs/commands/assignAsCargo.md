Assign a unit as cargo of a vehicle. Used together with `orderGetIn` to order a unit to get in as cargo into a specific vehicle. Before usage of this command a subordinate unit has not got the option to get into the cargo space of the vehicle.


---
*Syntaxes:*

unitName `assignAsCargo` vehicleName

---
*Example 1:*

```sqf
_soldier1 assignAsCargo _truck;
[_soldier1] orderGetIn true;
```