Tell the helicopter engine RPMs to reach the given value within a period of time. The simulation will try to reach the RPMs, but it does not guarantee it will reach the precise value!
* engine index 0: engine #1
* engine index 1: engine #2
* engine index 2: engine #3
* engine index -1: all engines


---
*Example 1:*
```sqf
vehicle player setWantedRPMRTD [2500, 30, 0];
```