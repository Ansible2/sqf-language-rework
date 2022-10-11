Returns a list of `player ids` of all the users on an MP server.


---
*Example 1:*
```sqf
if (isServer) then
{
	private _allUserIDs = allUsers;
	for "_i" from 1 to count _allUserIds do
	{
		diag_log format ["User #%1 id: %2", _i, _allUserIds select _i];
	};
};
```