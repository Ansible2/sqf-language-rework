Changes the mass of a PhysX object. When using the alternative syntax the mass change is gradual during the given time. A time of zero means immediate change.


---
*Syntaxes:*

myObject `setMass` mass

myObject `setMass` [mass, time]

---
*Example 1:*

```sqf
myObject setMass [10, 0.5];
```

*Example 2:*

```sqf
myObject setMass 10;
```