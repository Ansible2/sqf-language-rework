Check whether given `post process effect` is committed.


---
*Example 1:*
```sqf
ppEffectCommitted "colorCorrection";
```

*Example 2:*
```sqf
ppEffectCommitted _hndl;
```

*Example 3:*
```sqf
if (ppEffectCommitted "colorCorrection") then { hint "alteration done !" };
```