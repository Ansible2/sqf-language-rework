<pre>#define BUSH_WIDTH		2
#define BUSH_HEIGHT		2
#define TREE_TRUNK_WIDTH	0.5
#define TREE_TRUNK_HEIGHT	4

#define GET_POS\
	private _pos = _x modelToWorld (boundingcenter _x vectormultiply -1);

#define GET_BBOX\
	private _bbox = boundingboxreal _x;\
	private _bboxX = abs ((_bbox select 0 select 0) - (_bbox select 1 select 0)) / 2 + _cellSizeXHalf*0;\
	private _bboxY = abs ((_bbox select 0 select 1) - (_bbox select 1 select 1)) / 2 + _cellSizeYHalf*0;\
	private _bboxZ = abs ((_bbox select 0 select 2) - (_bbox select 1 select 2)) / 2 + _cellSizeZHalf*0;

	//_bboxZ = (abs (_bbox select 0 select 2) + abs (_bbox select 1 select 2)) + _cellSizeZHalf*0;

#define GET_BBOX_FIXED(SIZE)\
	private _bboxX = SIZE + _cellSizeXHalf;\
	private _bboxY = SIZE + _cellSizeYHalf;\
	private _bboxZ = SIZE + _cellSizeZHalf;

*(Reference Wiki "placeholder")*


---
*Syntaxes:*

<!-- [] call `BIN_fnc_getGridCollisions` -->

---
*Example 1:*

<!-- 
```sqf
[] call BIN_fnc_getGridCollisions;
``` -->