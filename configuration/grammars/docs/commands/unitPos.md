Return the unit position rules.

<br>The return value is always "Auto" unless the unit has gotten a `setUnitPos` command. In that case the value is the last stance the unit was ordered to.
<br>Available modes are listed at `setUnitPos`.


---
*Example 1:*
```sqf
hint str unitPos _unit;
```