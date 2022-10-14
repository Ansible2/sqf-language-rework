Changes the center of mass of an object smoothly during the given time (in seconds). A time of zero (or using the alternative syntax) means an immediate change.


---
*Syntaxes:*

myObject `setCenterOfMass` [centerOfMass, time]

myObject `setCenterOfMass` centerOfMass

---
*Example 1:*

```sqf
myObject setCenterOfMass [[0,-1,0], 0.5];
```

*Example 2:*

```sqf
myObject setCenterOfMass [0,-1,0];
```