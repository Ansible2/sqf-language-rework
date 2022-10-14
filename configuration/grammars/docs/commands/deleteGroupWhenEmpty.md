Marks given group for auto-deletion when group is empty. `true` will mark the group for auto-deletion, however `false` will only unmark the group that was marked previously. Other engine group auto-deletion mechanisms in place are not affected by this.


---
*Syntaxes:*

group `deleteGroupWhenEmpty` delete

---
*Example 1:*

```sqf
_group deleteGroupWhenEmpty true;
```