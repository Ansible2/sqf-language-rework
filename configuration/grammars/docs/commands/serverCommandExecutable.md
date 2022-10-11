Returns `true` if the `serverCommand` can be performed on the machine and in this exact environment, otherwise `false`. serverCommand can be executed only from `User Interface Event Handlers`, and this command also checks if that's the case.


---
*Example 1:*
```sqf
_canKick = serverCommandAvailable "#kick";
```

*Example 2:*
Add button to the main map to lock server, which could only be activated by admin:

```sqf
with uiNamespace do {
	ctrl = findDisplay 12 ctrlCreate ["RscButton", -1];
	ctrl ctrlSetPosition [0, 0, 0.5, 0.1];
	ctrl ctrlCommit 0;
	ctrl ctrlSetText "LOCK SERVER";
	ctrl ctrlAddEventHandler ["ButtonDown",
	{	
		if (serverCommandExecutable "#lock") then {
			serverCommand "#lock";
		} else {
			hint "You need to be logged in as admin to do this";
		};
	}];
};
```