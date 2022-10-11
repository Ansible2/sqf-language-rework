Suspend execution of script for given uitime.  uiSleep is a sleep method to delay script execution where script time/simulation time is stopped.
`uiSleep` is basically using the system time (uiTime more specifically) and not simulation time.
So in the cases where `sleep` would get stuck indefinitely, `uiSleep` can still be used to effectively delay script execution for example in pause or in a mission briefing or an editor or when simulation is paused in general.


---
*Example 1:*
```sqf
uiSleep 0.5;
```