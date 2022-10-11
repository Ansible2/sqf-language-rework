Creates a mine of the given type (type is the name of the subclass of **CfgVehicles**).
If the markers array contains several marker names, the position of a random one is used, otherwise, the given position is used.
The mine is placed inside a circle with this position as its center and placement as its radius.
 is 38.
This value is then dynamically reduced depending on factors such as distance, if a unit is in a vehicle, if it is day or night time, how directly unit is looking at the mine, how fast unit is moving, how inconspicuous is the mine or even if it is visible.


---
*Example 1:*
```sqf
_mine = createMine ["APERSMine", position player, [], 0];
```

*Example 2:*
Create satchel charge and give player control over it:

```sqf
_charge = createMine ["SatchelCharge_F", position player, [], 0];
player addOwnedMine _charge;
```