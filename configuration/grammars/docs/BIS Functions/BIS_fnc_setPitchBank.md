Rotate an object, giving it the specified pitch and bank, in degrees.<br>
`Pitch` is 0 when the object is level; 90 when pointing straight up; and -90 when pointing straight down.<br>
`Bank` is 0 when level; 90 when the object is rolled to the right, -90 when rolled to the left, and 180 when rolled upside down.<br>
Note that the object's `yaw` can be set with the `setDir` command, which should be issued before using this function, if required.<br>
The pitch/bank can be leveled out (set to 0) by using the `setDir` command.


---
*Syntaxes:*

[object, pitch, bank] call `BIS_fnc_setPitchBank`

---
*Example 1:*

```sqf
[player, 45, -45] call BIS_fnc_setPitchBank;
```