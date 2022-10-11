Returns start and end positions for the given ` rope`. If command fails, empty array **[]** is returned.


---
*Example 1:*
```sqf
_ends = ropeEndPosition (ropes heli1 select 0);
_start = _ends select 0;
_end = _ends select 1;
```