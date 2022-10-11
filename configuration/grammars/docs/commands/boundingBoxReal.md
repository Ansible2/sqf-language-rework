[[Image:Boundingbox.jpg|right|200px]] Returns a raw bounding box of given object in model coordinates space. This command is similar to `boundingBox` but gives more precise measurements.<br>
The alternative syntax allows to specify clipping type to be used, which in some cases could make the result even more precise.


---
*Example 1:*
```sqf
private _bbr = boundingBoxReal vehicle player;
private _p1 = _bbr select 0;
private _p2 = _bbr select 1;
private _maxWidth = abs ((_p2 select 0) - (_p1 select 0));
private _maxLength = abs ((_p2 select 1) - (_p1 select 1));
private _maxHeight = abs ((_p2 select 2) - (_p1 select 2));
```

*Example 2:*
```sqf
hint str (0 boundingBoxReal cursorObject);
```