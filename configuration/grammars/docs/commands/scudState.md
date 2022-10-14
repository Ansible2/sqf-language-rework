Return the current state of given Scud launcher.


---
*Syntaxes:*

`scudState` scudName

---
*Example 1:*

```sqf
waitUntil { sleep 1; scudState _scud > 2 };
guba say "MasterPlanCompletion";
```