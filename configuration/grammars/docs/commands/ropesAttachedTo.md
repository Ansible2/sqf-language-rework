Returns the owners of all ropes attached to the cargo - the transports to which other entities are attached with `ropes`.
This command returns `Array` of `Object`s instead of a single `Object` as with `ropeAttachedTo`.


---
*Example 1:*
```sqf
r1 = ropeCreate [car1, [0,0,0], car3, [0,0,0], 10]; 
r2 = ropeCreate [car2, [0,0,0], car3, [0,0,0], 10];
ropesAttachedTo car3; // [car1,car2]
```