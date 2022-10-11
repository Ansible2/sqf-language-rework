Returns `true` if the code context is being remote executed from the JIP queue by `remoteExec` or `remoteExecCall` (when JIP param was set). It is a subset of `isRemoteExecuted`:
* Normal remote execution: 
** `isRemoteExecuted` - `true`
** `isRemoteExecutedJIP` - `false`
* Remote execution from JIP queue:
** `isRemoteExecuted` - `true`
** `isRemoteExecutedJIP` - `true`
In SP always returns `false`.


---
*Example 1:*
```sqf
_remoteExecutedJIP = isRemoteExecutedJIP;
```