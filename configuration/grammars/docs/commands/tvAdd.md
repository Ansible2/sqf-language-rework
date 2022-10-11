Adds an item with given text to Tree View control. The position on Tree View where to add the item and the actual path to this item once added are different. If item is added to existing item, then parent item path is used. If no parent exists, empty array [] is used. See `Tree View Path` for more information.


---
*Example 1:*
```sqf
_index = _ctrl tvAdd [[], "Parent Item"];
```

*Example 2:*
```sqf
_index = tvAdd [101, [0], "First item"];
```