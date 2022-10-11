Sorts given multi-column ListNBox in the given column by either `lnbText`, `lnbValue` or `lnbData` in normal or reversed order, using case-sensitive or case-insensitive comparison. Unlike the older `lnbSortXXX` commands, this command supports UNICODE characters out of the box.<br>
When sorting by **"VALUE"**, the rows with the same `lnbValue` will additionally be sorted by `lnbText` in the order specified by the `reversedOrder` flag, text specified by `useTextRight` flag and case-sensitivity specified by `caseSensitive` flag.

 param.


---
*Example 1:*
```sqf
with uiNamespace do
{
	private _column = 1;
	private _lnb = findDisplay 46 createDisplay "RscDisplayEmpty" ctrlCreate ["RscListNBox", -1];
	_lnb ctrlSetPosition [0,0,1,1];
	_lnb ctrlCommit 0;
	lnbClear _lnb;
	{ 
		_lnb lnbAddRow [format ["Row %1", _forEachIndex], _x select 0];
		_lnb lnbSetValue [[_forEachIndex, _column], _x select 1];
	} 
	forEach [["В",1], ["Я",0], ["Б",1], ["Ю",0], ["А",1]];
	[_lnb, _column] lnbSortBy ["VALUE", true, false];
};
```