Returns the velocity of the object as vector in m/s.


---
*Example 1:*
```sqf
_vector = velocity jeep;
```

*Example 2:*
```sqf
if ((velocity _plane1 select 2) > 50) then { hint "Aircraft is climbing up too fast!"; };
```