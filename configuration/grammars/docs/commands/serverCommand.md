Executes the given `server command`.
{{Feature|informative|
* Available commands for execution can be found with `serverCommandAvailable`
* Commands that can be executed can be found with `serverCommandExecutable`


---
*Example 1:*
```sqf
serverCommand "#logout";
```

*Example 2:*
Create button on the main map which will show userlist to anyone who clicks on it:

```sqf
with uiNamespace do 
{
	private _ctrl = findDisplay 12 ctrlCreate ["RscButton", -1];
	_ctrl ctrlSetPosition [0,0,0.5,0.1];
	_ctrl ctrlSetText "USERLIST";
	_ctrl ctrlCommit 0;
	_ctrl ctrlAddEventHandler ["ButtonDown", 
	{
		serverCommand "#userlist";
	}];
};
```

*Example 3:*
```sqf
serverCommand format ["#kick %1",_name];
```

*Example 4:*
```sqf
private _passwordWasOK = "MyServerCommandPassword" serverCommand "#lock";
```