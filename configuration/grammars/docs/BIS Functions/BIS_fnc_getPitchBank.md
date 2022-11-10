Returns the pitch and bank of an object, in degrees. `Yaw` can be found using the `getDir` command.<br>
`Pitch` is 0 when the object is level; 90 when pointing straight up; and -90 when pointing straight down.<br>
`Bank` is 0 when level; 90 when the object is rolled to the right, -90 when rolled to the left, and 180 when rolled upside down.


---
*Syntaxes:*

object call `BIS_fnc_getPitchBank`

---
*Example 1:*

```sqf
private _pitchBank = vehicle player call BIS_fnc_getPitchBank;
```