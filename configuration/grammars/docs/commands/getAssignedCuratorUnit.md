Returns unit assigned to curator logic.


---
*Example 1:*
```sqf
_curatorUnit = getAssignedCuratorUnit (allCurators select 0);
_curatorUnit joinAs [createGroup civilian, 0];
```