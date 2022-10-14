Returns array with active SQSs. To see number of all scripts currently in the scheduler use `diag_activeScripts`.


---
*Syntaxes:*

`diag_activeSQSScripts`

---
*Example 1:*

```sqf
{systemChat str _x} forEach diag_activeSQSScripts;
```