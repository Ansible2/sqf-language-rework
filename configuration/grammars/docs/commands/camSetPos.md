Sets the position of the given camera or seagull (see `camCreate`). It is worth mentioning that camera position can also be set with `setPos`, in which case it would be instant. With `camSetPos` it is possible to make smooth position transition in time, defined with `camCommit`, which is required in this case.


---
*Example 1:*
```sqf
_cam camSetPos [2300,1000,130];
_cam camCommit 10;
```