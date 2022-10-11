Converts position from world space to object model space in `render time scope`.


---
*Example 1:*
```sqf
_relPos = myObject worldToModelVisual [0,0,0];
```

*Example 2:*
```sqf
_relPos = player worldToModelVisual position car;
```

*Example 3:*
```sqf
_relPos = car worldToModelVisual [12000, 5000];
```

*Example 4:*
```sqf
_relPos = unit worldToModelVisual position tank;
```