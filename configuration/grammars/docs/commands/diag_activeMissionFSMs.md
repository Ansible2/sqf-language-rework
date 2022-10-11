Returns array with active Mission FSMs. To see number of all scripts currently in the scheduler use `diag_activeScripts`.


---
*Example 1:*
```sqf
{systemChat str _x} forEach diag_activeMissionFSMs;
```