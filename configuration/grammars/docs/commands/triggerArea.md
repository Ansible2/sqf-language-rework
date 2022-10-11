Returns currently monitored trigger area. Since Arma 3 v1.60, the command returns 3rd dimension for the monitored area. If height is not set, the value for it would be -1.


---
*Example 1:*
```sqf
_area = triggerArea sensor1; // result is [200, 120, 45, false, -1];
```