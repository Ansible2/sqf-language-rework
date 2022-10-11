Returns whether or not the given object is an UAV, UGV (drone). Command will also return `true` for empty drones. Corresponding to transport parameter **isUAV**.


---
*Example 1:*
```sqf
_isUAV = unitIsUAV _vehicle;
```