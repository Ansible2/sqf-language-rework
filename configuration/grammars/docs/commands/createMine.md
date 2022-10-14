Creates a mine of the given type (type is the name of the subclass of **CfgVehicles**).
If the markers array contains several marker names, the position of a random one is used, otherwise, the given position is used.
The mine is placed inside a circle with this position as its center and placement as its radius.


---
*Syntaxes:*

`createMine` [type, position, markers, placement]

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