Converts position from world space to object model space.


---
*Example 1:*
```sqf
_relPos = myObject worldToModel [0,0,0];
```

*Example 2:*
```sqf
_relPos = player worldToModel ASLToAGL getPosASL car;
```

*Example 3:*
```sqf
_relPos = car worldToModel [12000,5000];
```