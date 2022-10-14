Torque produced by engines in `N·m` (Newton &times; meter).


---
*Syntaxes:*

`enginesTorqueRTD` RTD_helicopter

---
*Example 1:*

```sqf
_UH80_E1 = (enginesTorqueRTD _UH80) select 0; // engine 1 Torque
_UH80_E2 = (enginesTorqueRTD _UH80) select 1; // engine 2 Torque
```