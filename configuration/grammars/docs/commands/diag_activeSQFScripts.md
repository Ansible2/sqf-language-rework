Returns information about active `SQF` scripts. To see number of all scripts currently in the scheduler use `diag_activeScripts`.


---
*Example 1:*
```sqf
[] spawn { hint str diag_activeSQFScripts; }; // displays [["<spawn> hint str diag_activeSQFScripts;", "", true, 1]]
```

*Example 2:*
```sqf
[] spawn {
	hint str diag_activeSQFScripts; // displays [["<spawn> hint str diag_activeSQFScripts;", "", true, 2]]
};
```

*Example 3:*
```sqf
[] spawn {
	scriptName "aScript";
	hint str diag_activeSQFScripts; // displays [["aScript", "", true, 3]]
};
```