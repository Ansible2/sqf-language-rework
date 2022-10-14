Returns unit assigned to curator logic.


---
*Syntaxes:*

`getAssignedCuratorUnit` curatorObj

---
*Example 1:*

```sqf
_curatorUnit = getAssignedCuratorUnit (allCurators select 0);
_curatorUnit joinAs [createGroup civilian, 0];
```