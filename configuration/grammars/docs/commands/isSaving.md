Returns the status of autosave request, made when `saveGame` command is executed. When request is made, the command immediately returns `true`. The engine then handles the saving and when it is done, the command returns `false`.


---
*Example 1:*
```sqf
[] spawn
{
	saveGame;
	waitUntil { !isSaving };
	systemChat "Game Saving Is Done!";
};
```