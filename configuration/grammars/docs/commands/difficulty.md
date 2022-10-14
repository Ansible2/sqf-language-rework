Returns high-level selected difficulty mode.   

Returned value will be: 0 (Recruit), 1 (Regular), 2 (Veteran) or 3 (Elite)


---
*Syntaxes:*

`difficulty`

---
*Example 1:*

```sqf
value = difficulty;
```

*Example 2:*

The command returns the index of selected difficulty as they appear in `CfgDifficulties`
[[Image:Difficulty.jpg|400px|Note: "Insane" is a modded difficulty]]

```sqf
hint str difficulty; //Result: 4
```