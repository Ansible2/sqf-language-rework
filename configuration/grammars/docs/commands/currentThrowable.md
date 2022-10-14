Returns currently selected throwable, which will be launched if the user presses "G".


---
*Syntaxes:*

`currentThrowable` player

---
*Example 1:*

```sqf
currentThrowable player; // ["SmokeShellGreen", "SmokeShellGreenMuzzle", [1.00002e+007, 0]]
```

*Example 2:*

```sqf
_ct = currentThrowable player;				// ["HandGrenade", "HandGrenadeMuzzle", [1e+007, 0]]
_id = (_ct select 2 select 0) - 1e+007;		// 18
```