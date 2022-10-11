Execute a block of code in which all Eden Editor operations will be recorded as one history step. For example creating an entity, setting its attributes and then connections would normally be recorded as three different steps. Calling them all within single `collect3DENHistory` block will group them together and the user will need to undo only once to revert the changes.


</spoiler>


---
*Example 1:*
```sqf
collect3DENHistory 
{
	_logic = create3DENEntity ["Logic", "Logic", position player];
	add3DENConnection ["Sync", [_logic], player ];
}; // Creates a logic and connects it to player in one history step.
```

*Example 2:*
```sqf
["Create Entity", "B_Soldier_F", "a3\3den\data\cfg3den\history\create_ca.paa"] collect3DENHistory 
{
	create3DENEntity ["Object","B_Soldier_F", screenToWorld [0.5,0.5]];
};
```

*Example 3:*
```sqf
[nil, nil, "a3\3den\data\cfg3den\history\moveitems_ca.paa"] collect3DENHistory 
{
	create3DENEntity ["Object","B_Soldier_F", screenToWorld [0.5,0.5]];
}; // Change only the icon
```