Sets camera focus range in format [distance, blur]. blur param - sets the camera focus blur. It does not automatically commit changes (see `camCommit`). Use [-1, -1] to disable focus completely.


---
*Example 1:*
```sqf
_camera camSetFocus [50, 1];
```