Returns `true` if the code context is being remote executed by `remoteExec` or `remoteExecCall`. In SP always returns `false`. See also `isRemoteExecutedJIP`


---
*Example 1:*
```sqf
private _remoteExecuted = isRemoteExecuted;
```