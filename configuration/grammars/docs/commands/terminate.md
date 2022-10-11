Terminates (aborts) `spawn`ed or `execVM`ed script.


---
*Example 1:*
```sqf
_script = [] execVM "script.sqf";
sleep 5;
terminate _script;
```