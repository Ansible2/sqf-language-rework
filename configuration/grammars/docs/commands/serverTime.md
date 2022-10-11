Returns the time since last server restart, synced to all clients in MP. The syncing is happening every 5 minutes, but you can force the next sync earlier by executing `estimatedTimeLeft` command. The time returned is also different to the time returned by `time` and `diag_tickTime` commands on server. Returns 0 in SP.<br><br>


---
*Example 1:*
```sqf
hint format ["Synced server time : %1", serverTime];
```