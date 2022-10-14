Registers new log file recording a network traffic and returns handle of the log. The log file is saved inside the <See arm Reference 3> root folder.


---
*Syntaxes:*

`logNetwork` logFile

---
*Example 1:*

```sqf
_handle = logNetwork ["myLog.txt", [""]];
```