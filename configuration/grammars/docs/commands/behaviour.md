Returns the behaviour of the individual unit, this is why it only accepts `Object` as the argument. For Arma 3 behaviour explanation see [[Arma_3_AI_Behavior]]


---
*Example 1:*
```sqf
_soldier setBehaviour "CARELESS";
_b = behaviour _soldier; // returns "CARELESS"
```