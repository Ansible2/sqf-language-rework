<pre>/*
	Author: Zozo

	Description:
	Inserts item with a defined priority to the Queue
	The Priority Queue is sorted on inserting. Bigger numbers are set on higher indexes.
	Complexity: O(n)

	Parameters:
	_handle:INT - Queue handle (get it with BIS_fnc_PriorityQueue_Init)
	_item:ANY - item, can be whatever
	_priority:INT - the priority the item is inserted with

	Returns:
	_success:BOOL - true if item was inserted into the Queue, otherwise false

	Syntax:
	_success:BOOL = [_handle, _item, _priority] call BIS_fnc_PriorityQueue_InsertItem;

	Example:
	_s = [_priorityQueue_1, "myItem", 5] call BIS_fnc_PriorityQueue_InsertItem;
*</pre>*(Reference Wiki "placeholder")*<!-- Remove this after fill-in -->


---
*Syntaxes:*

[] call `BIS_fnc_priorityQueue_PushItem`

---
