Sets group speed mode. If unit is passed as param, unit's group is used. Mode may be one of: 
* `"UNCHANGED"` (unchanged)
* `"LIMITED"` (half speed)
* `"NORMAL"` (full speed, maintain formation)
* `"FULL"` (do not wait for any other units in formation)


---
*Example 1:*
```sqf
_groupOne setSpeedMode "LIMITED";
```