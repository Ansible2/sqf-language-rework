Sorts given ListBox by either `lbText`, `lbValue` or `lbData` in normal or reversed order, using case-sensitive or case-insensitive comparison. This command supports UNICODE characters.
When sorting by **"VALUE"**, the rows with the same `lbValue` will additionally be sorted by `lbText` in the order specified by `reversedOrder` flag, text specified by `useTextRight` flag and case-sensitivity specified by `caseSensitive` flag.


---
*Syntaxes:*

controlOrIDC `lbSortBy` [sortByType, reversedOrder, caseSensitive, useTextRight, unicodeOff]

---
*Example 1:*

```sqf
with uiNamespace do
{
	private _lb = findDisplay 46 createDisplay "RscDisplayEmpty" ctrlCreate ["RscListBox", -1];
	_lb ctrlSetPosition [0,0,1,1];
	_lb ctrlCommit 0;
	lbClear _lb;
	{
		_lb lbAdd (_x select 0);
		_lb lbSetValue [_forEachIndex, _x select 1];
	}
	forEach [["В",1], ["Я",0], ["Б",1], ["Ю",0], ["А",1]];
	_lb lbSortBy ["VALUE", false, false];
};
```