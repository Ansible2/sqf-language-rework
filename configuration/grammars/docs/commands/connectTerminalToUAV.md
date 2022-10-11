Connect person with UAV terminal to UAV unit. UAV Terminal item needs to be assigned to GPS slot.
If UAV is already connected to another terminal, this new connection will fail.


---
*Example 1:*
```sqf
bool = player connectTerminalToUAV uav1;
```

*Example 2:*
```sqf
player connectTerminalToUAV objNull; //disconnect
```