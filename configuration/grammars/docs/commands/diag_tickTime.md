Real time in seconds spent from the start of the game. On Windows the command uses [https://docs.microsoft.com/en-us/windows/win32/api/timeapi/nf-timeapi-timegettime timeGetTime].


---
*Example 1:*
```sqf
// Measure execution time of a script
_start = diag_tickTime;
// code
_stop = diag_tickTime;
diag_log format ["%1",_stop - _start];
```