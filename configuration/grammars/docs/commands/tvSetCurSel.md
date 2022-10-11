Sets cursor to given item on given path. IDC means id of parent Tree View. To deselect all items use [-1] for the path param (`available since Arma 3 v1.56`)


---
*Example 1:*
```sqf
tvSetCurSel [101, [0]];
```

*Example 2:*
```sqf
_ctrl tvSetCurSel [0,0,0];
```

*Example 3:*
```sqf
[] spawn
{
	disableSerialization;
	_CT_TREE = findDisplay 46 ctrlCreate ["RscTree", -1];
	_CT_TREE ctrlSetPosition [0,0,0.3,1];
	_CT_TREE ctrlCommit 0;
	_CT_TREE tvAdd [[],"Parent_A"];
	_CT_TREE tvAdd [[0],"Child_A"];
	_CT_TREE tvAdd [[0,0],"Grandchild_A"];
	_CT_TREE tvAdd [[],"Parent_B"];
	_CT_TREE tvAdd [[1],"Child_B"];
	sleep 1;
	hint "SELECT [0,0,0]";
	_CT_TREE tvSetCurSel [0,0,0];
	sleep 2;
	hint "DESELECT ALL";
	_CT_TREE tvSetCurSel [-1];
};
```