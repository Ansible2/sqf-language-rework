Sets the collective pitch control to a specific position, regardless of input devices (until those are changed).
* 0: collective fully down
* ~0.7: approximate stable hover position
* 1: collective fully up


---
*Syntaxes:*

helicopterRTD `setActualCollectiveRTD` value

---
*Example 1:*

```sqf
myHelicopterRTD setActualCollectiveRTD 0.7;
```