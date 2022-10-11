Sets progress position of a `progress bar`.


---
*Example 1:*
```sqf
_control progressSetPosition 0.5;
```

*Example 2:*
```sqf
with uiNamespace do {
	bar = findDisplay 46 ctrlCreate ["RscProgress", -1];
	bar ctrlSetPosition [0,0,1,0.01];
	bar ctrlCommit 0;
	bar progressSetPosition 0.75;
};
```