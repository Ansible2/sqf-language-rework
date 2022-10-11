Returns `false` if rope length changing animation is in progress. Returns `true` if animation is done.


---
*Example 1:*
```sqf
waitUntil { ropeUnwound (ropes heli1 select 0) };
hint "Unwinding Complete";
```