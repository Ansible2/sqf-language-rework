Registers new log file recording a network traffic and returns handle of the log. The log file is saved inside the {{arma3}} root folder.


---
*Syntaxes:*

`logNetwork` logFile

---
*Example 1:*

```sqf
_handle = logNetwork ["myLog.txt", [""]];
```