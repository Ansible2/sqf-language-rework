Returns current percentage of mass from items stored in a uniform relative to the maximum capacity of the uniform.<br>
It is equivalent to this formula:
<sqf>private _loadUniform = massOfAllItemsInUniform / getContainerMaxLoad uniform player;</sqf>


---
*Example 1:*
```sqf
private _weight = loadUniform player;
```