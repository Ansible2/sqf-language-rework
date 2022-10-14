Sets tooltip text of given control.


---
*Syntaxes:*

control `ctrlSetTooltip` text

---
*Example 1:*

```sqf
_control ctrlSetTooltip "tooltip";
```

*Example 2:*

```sqf
findDisplay 10000 displayCtrl 10001 ctrlSetTooltip "ThisIsAGoodTip";
```

*Example 3:*

```sqf
with uiNamespace do 
{
	bar = findDisplay 46 createDisplay "RscDisplayEmpty" ctrlCreate ["RscProgress", -1];
	bar ctrlSetPosition [0,0,1,0.01];
	bar ctrlCommit 0;
	bar progressSetPosition 0.75;
	bar ctrlSetTooltip "lalalalalalalala";
};
```