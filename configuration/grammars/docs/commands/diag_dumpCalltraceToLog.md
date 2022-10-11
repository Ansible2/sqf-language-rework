Dumps current callstack/calltrace to RPT.


---
*Example 1:*
```sqf
diag_dumpCalltraceToLog;
/* outputs:
Callstack:"
14:17:06 "    [] L1 ()"
14:17:06 "    [] L25 (A3\functions_f\Debug\fn_debugConsoleExec.sqf)"
14:17:06 "        _this:[{st = 15 / 0;}]"
14:17:06 "    [] L0 ()"
14:17:06 "    [] L25 (A3\functions_f\Debug\fn_debugConsoleExec.sqf)"
14:17:06 "        _x:any"
14:17:06 "    [] L1 ()"
14:17:06 "        _this:[]"
14:17:06 "CALLSTACK END;;;
*/
```